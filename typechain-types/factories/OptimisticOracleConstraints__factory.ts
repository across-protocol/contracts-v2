/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OptimisticOracleConstraints, OptimisticOracleConstraintsInterface } from "../OptimisticOracleConstraints";

const _abi = [
  {
    inputs: [],
    name: "ancillaryBytesLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6088610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063c371dda7146038575b600080fd5b604061200081565b60405190815260200160405180910390f3fea26469706673582212203e114c44e82f1b01130f98a7f24721772f8c9d070ab8bd4447b15ef26769662864736f6c634300080b0033";

export class OptimisticOracleConstraints__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<OptimisticOracleConstraints> {
    return super.deploy(overrides || {}) as Promise<OptimisticOracleConstraints>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OptimisticOracleConstraints {
    return super.attach(address) as OptimisticOracleConstraints;
  }
  connect(signer: Signer): OptimisticOracleConstraints__factory {
    return super.connect(signer) as OptimisticOracleConstraints__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimisticOracleConstraintsInterface {
    return new utils.Interface(_abi) as OptimisticOracleConstraintsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OptimisticOracleConstraints {
    return new Contract(address, _abi, signerOrProvider) as OptimisticOracleConstraints;
  }
}