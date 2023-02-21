// SPDX-License-Identifier: AGPL-3.0-only
import "../SpokePool.sol";

contract AcrossMessageHandlerMock is AcrossMessageHandler {
    function handleAcrossMessage(
        address tokenSent,
        uint256 amount,
        bytes memory message
    ) external override {}
}
