//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./interfaces/USSSpokePoolInterface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./Lockable.sol";
import "@uma/core/contracts/common/implementation/MultiCaller.sol";

/// @title Interface for making arbitrary calls during swap
interface IAggregationExecutor {
    /// @notice propagates information about original msg.sender and executes arbitrary data
    function execute(address msgSender) external payable; // 0x4b64e492
}

// Grabbed from source code of Optimism V5 router: https://optimistic.etherscan.io/address/0x1111111254eeb25477b68fb85ed929f73a960582#code
// - readable source: https://vscode.blockscan.com/optimism/0x1111111254eeb25477b68fb85ed929f73a960582
interface I1InchAggregationRouterV5 {
    struct SwapDescription {
        IERC20 srcToken;
        IERC20 dstToken;
        address payable srcReceiver;
        address payable dstReceiver;
        uint256 amount;
        uint256 minReturnAmount;
        uint256 flags;
    }

    /**
    /// @notice Performs a swap, delegating all calls encoded in `data` to `executor`.
    /// @dev router keeps 1 wei of every token on the contract balance for gas optimisations reasons. 
    /// This affects first swap of every token by leaving 1 wei on the contract.
    /// @param executor Aggregation executor that executes calls described in `data`
    /// @param desc Swap description
    /// @param permit Should contain valid permit that can be used in `IERC20Permit.permit` calls.
    /// @param data Encoded calls that `caller` should execute in between of swaps
    /// @return returnAmount Resulting token amount
    /// @return spentAmount Source token amount     
    */
    function swap(
        IAggregationExecutor executor,
        SwapDescription calldata desc,
        bytes calldata permit,
        bytes calldata data
    ) external payable returns (uint256 returnAmount, uint256 spentAmount);
}

/**
 * @title SwapAndBridge
 * @notice Allows caller to swap tokens on a chain and bridge them via Across atomically.
 */
contract SwapAndBridge is Lockable, MultiCaller {
    using SafeERC20 for IERC20;

    USSSpokePoolInterface public immutable spokePool;
    I1InchAggregationRouterV5 public immutable oneInchRouter;

    event SwapAndBridge1Inch(
        I1InchAggregationRouterV5.SwapDescription swapDescription,
        IAggregationExecutor aggregationExecutor
    );

    // Params we'll need caller to pass in to specify an Across Deposit. The input token will be swapped into first
    // before submitting a bridge deposit, which is why we don't include the input token amount as it is not known
    // until after the swap.
    struct DepositData {
        address inputToken;
        address outputToken;
        uint256 outputAmount;
        address depositor;
        address recipient;
        uint256 destinationChainid;
        address exclusiveRelayer;
        uint32 quoteTimestamp;
        uint32 fillDeadline;
        uint32 exclusivityDeadline;
        bytes message;
    }

    constructor() {
        // Addresses are hard-coded below for Optimism-network for demonstration purposes. In production, these
        // would be passed in as constructor args. They are left here to help debugging and testing.
        spokePool = USSSpokePoolInterface(0x6f26Bf09B1C792e3228e5467807a900A503c0281);
        oneInchRouter = I1InchAggregationRouterV5(0x11111112542D85B3EF69AE05771c2dCCff4fAa26);
    }

    /**
     * @notice Swaps tokens on this chain via 1Inch and bridges them via Across atomically. Caller can fully specify
     * their slippage tolerance for the swap and also the full Across deposit params.
     * @param aggregationExecutor Address of 1inch contract that executes calls described in `oneInchData`.
     * @param swapToken Token to pull from msg.sender into contract and swap on 1inch into depositData.inputToken.
     * @param swapTokenAmount Amount of swapToken to swap for a minimum amount of depositData.inputToken.
     * @param minExpectedInputTokenAmount Minimum amount of received depositData.inputToken that we'll submit bridge
     * deposit with.
     * @param depositData Specifies the Across deposit params we'll send after the swap.
     */
    function swap1InchAndBridge(
        IAggregationExecutor aggregationExecutor,
        address swapToken,
        uint256 swapTokenAmount,
        uint256 minExpectedInputTokenAmount,
        DepositData calldata depositData
    ) external nonReentrant {
        // @dev: Don't let caller use WETH, or better, hardcode the swap and acrossInput tokens to be USDC.e/USDC
        // because 1Inch has special rules to handle WETH<-->ETH.

        // Pull tokens from caller into this contract.
        IERC20(swapToken).transferFrom(msg.sender, address(this), swapTokenAmount);

        // Craft 1Inch swap arguments to swap `swapToken` for `acrossInputToken` using this contract as the recipient
        // of the swap.
        I1InchAggregationRouterV5.SwapDescription memory swapDescription = I1InchAggregationRouterV5.SwapDescription({
            srcToken: IERC20(swapToken),
            dstToken: IERC20(depositData.inputToken),
            srcReceiver: payable(address(this)),
            dstReceiver: payable(address(this)),
            amount: swapTokenAmount,
            minReturnAmount: minExpectedInputTokenAmount,
            flags: 0 // TODO: Change this if we want to support ETH swaps and/or partial fills (i.e.
            // swapTokenAmount != spentAmount). For now, set to 0 for simplicity.
        });

        // Swap and run safety checks.
        uint256 srcBalanceBefore = IERC20(swapToken).balanceOf(address(this));
        uint256 dstBalanceBefore = IERC20(depositData.inputToken).balanceOf(address(this));

        // @dev: Example swap I used for comparison:
        // https://optimistic.etherscan.io/tx/0x8a4e77ee1a62e94b42b21e849bcdabd60d43ac49191cd2878f6b47f395f26abc
        IERC20(depositData.inputToken).safeIncreaseAllowance(address(oneInchRouter), swapTokenAmount);
        (uint256 returnAmount, ) = oneInchRouter.swap(
            aggregationExecutor,
            swapDescription,
            new bytes(0), // TODO: No IERC20Permit.permit needed since we're sending an approval?
            new bytes(0) // TODO: We don't want to execute any data on swaps but I'm not sure how this is used.
        );

        // Sanity check that we received exactly as much as the oneInchRouter said we did.
        require(
            returnAmount == dstBalanceBefore - IERC20(depositData.inputToken).balanceOf(address(this)),
            "return amount"
        );
        // Sanity check that received amount from swap is enough to submit Across deposit with.
        require(returnAmount >= minExpectedInputTokenAmount, "min expected input amount");
        // Sanity check that we don't have any leftover swap tokens that would be locked in this contract (i.e. check
        // that we weren't partial filled).
        require(
            srcBalanceBefore - IERC20(swapToken).balanceOf(address(this)) == swapTokenAmount,
            "leftover src tokens"
        );

        // Deposit the swapped tokens into Across and bridge them using remainder of input params.
        IERC20(depositData.inputToken).safeApprove(address(spokePool), returnAmount);
        spokePool.depositUSS(
            depositData.depositor,
            depositData.recipient,
            depositData.inputToken, // input token
            depositData.outputToken, // output token
            returnAmount, // input amount. Note: this is the amount we received from the swap and checked its value
            // above.
            depositData.outputAmount, // output amount
            depositData.destinationChainid,
            depositData.exclusiveRelayer,
            depositData.quoteTimestamp,
            depositData.fillDeadline,
            depositData.exclusivityDeadline,
            depositData.message
        );

        emit SwapAndBridge1Inch(swapDescription, aggregationExecutor);
    }
}
