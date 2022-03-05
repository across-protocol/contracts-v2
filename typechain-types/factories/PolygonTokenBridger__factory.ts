/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonTokenBridger, PolygonTokenBridgerInterface } from "../PolygonTokenBridger";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_destination",
        type: "address",
      },
      {
        internalType: "contract WETH9",
        name: "_l1Weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "destination",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l1Weth",
    outputs: [
      {
        internalType: "contract WETH9",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maticToken",
    outputs: [
      {
        internalType: "contract MaticToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "retrieve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract PolygonIERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isMatic",
        type: "bool",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610bbd380380610bbd83398101604081905261002f9161006b565b6000805460ff191660011790556001600160a01b039182166080521660a0526100a5565b6001600160a01b038116811461006857600080fd5b50565b6000806040838503121561007e57600080fd5b825161008981610053565b602084015190925061009a81610053565b809150509250929050565b60805160a051610ae66100d7600039600081816070015261012901526000818161018601526102450152610ae66000f3fe60806040526004361061005e5760003560e01c8063b269681d11610043578063b269681d14610174578063d124dc4f146101a8578063dc354296146101c857600080fd5b80630a79309b146100f7578063146bf4b11461011757600080fd5b366100f25760005460ff16156100f0577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b1580156100d657600080fd5b505af11580156100ea573d6000803e3d6000fd5b50505050505b005b600080fd5b34801561010357600080fd5b506100f0610112366004610974565b6101de565b34801561012357600080fd5b5061014b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561018057600080fd5b5061014b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101b457600080fd5b506100f06101c336600461099f565b610318565b3480156101d457600080fd5b5061014b61101081565b6101e6610499565b610213600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526102e5907f00000000000000000000000000000000000000000000000000000000000000009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c791906109e1565b73ffffffffffffffffffffffffffffffffffffffff8416919061050c565b610315600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b50565b610320610499565b61034d600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b61036f73ffffffffffffffffffffffffffffffffffffffff84163330856105e0565b6040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff841690632e1a7d4d90602401600060405180830381600087803b1580156103d757600080fd5b505af11580156103eb573d6000803e3d6000fd5b505050508015610464576040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905261101090632e1a7d4d9084906024016000604051808303818588803b15801561044a57600080fd5b505af115801561045e573d6000803e3d6000fd5b50505050505b610494600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b505050565b60005460ff1661050a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104949084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610644565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261063e9085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161055e565b50505050565b60006106a6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107509092919063ffffffff16565b80519091501561049457808060200190518101906106c491906109fa565b610494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610501565b606061075f8484600085610769565b90505b9392505050565b6060824710156107fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610501565b73ffffffffffffffffffffffffffffffffffffffff85163b610879576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610501565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108a29190610a43565b60006040518083038185875af1925050503d80600081146108df576040519150601f19603f3d011682016040523d82523d6000602084013e6108e4565b606091505b50915091506108f48282866108ff565b979650505050505050565b6060831561090e575081610762565b82511561091e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105019190610a5f565b73ffffffffffffffffffffffffffffffffffffffff8116811461031557600080fd5b60006020828403121561098657600080fd5b813561076281610952565b801515811461031557600080fd5b6000806000606084860312156109b457600080fd5b83356109bf81610952565b92506020840135915060408401356109d681610991565b809150509250925092565b6000602082840312156109f357600080fd5b5051919050565b600060208284031215610a0c57600080fd5b815161076281610991565b60005b83811015610a32578181015183820152602001610a1a565b8381111561063e5750506000910152565b60008251610a55818460208701610a17565b9190910192915050565b6020815260008251806020840152610a7e816040850160208701610a17565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220f1cc848e3ad63c2a8228332d4710a19a242bf1490810efee19a4398900eb127464736f6c634300080b0033";

export class PolygonTokenBridger__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _destination: string,
    _l1Weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PolygonTokenBridger> {
    return super.deploy(_destination, _l1Weth, overrides || {}) as Promise<PolygonTokenBridger>;
  }
  getDeployTransaction(
    _destination: string,
    _l1Weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_destination, _l1Weth, overrides || {});
  }
  attach(address: string): PolygonTokenBridger {
    return super.attach(address) as PolygonTokenBridger;
  }
  connect(signer: Signer): PolygonTokenBridger__factory {
    return super.connect(signer) as PolygonTokenBridger__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolygonTokenBridgerInterface {
    return new utils.Interface(_abi) as PolygonTokenBridgerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PolygonTokenBridger {
    return new Contract(address, _abi, signerOrProvider) as PolygonTokenBridger;
  }
}