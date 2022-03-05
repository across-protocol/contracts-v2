/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lockable, LockableInterface } from "../Lockable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b506000805460ff19166001179055603f80602a6000396000f3fe6080604052600080fdfea2646970667358221220ba9e9bf3422582bb4a933aa812ff4f172509c6eda78aadbe49a3439fbbd522c864736f6c634300080b0033";

export class Lockable__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Lockable> {
    return super.deploy(overrides || {}) as Promise<Lockable>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lockable {
    return super.attach(address) as Lockable;
  }
  connect(signer: Signer): Lockable__factory {
    return super.connect(signer) as Lockable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockableInterface {
    return new utils.Interface(_abi) as LockableInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lockable {
    return new Contract(address, _abi, signerOrProvider) as Lockable;
  }
}