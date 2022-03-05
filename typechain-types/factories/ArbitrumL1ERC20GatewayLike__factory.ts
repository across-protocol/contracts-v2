/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ArbitrumL1ERC20GatewayLike, ArbitrumL1ERC20GatewayLikeInterface } from "../ArbitrumL1ERC20GatewayLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasPriceBid",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "outboundTransfer",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class ArbitrumL1ERC20GatewayLike__factory {
  static readonly abi = _abi;
  static createInterface(): ArbitrumL1ERC20GatewayLikeInterface {
    return new utils.Interface(_abi) as ArbitrumL1ERC20GatewayLikeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumL1ERC20GatewayLike {
    return new Contract(address, _abi, signerOrProvider) as ArbitrumL1ERC20GatewayLike;
  }
}