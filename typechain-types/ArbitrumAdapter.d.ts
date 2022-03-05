/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ArbitrumAdapterInterface extends ethers.utils.Interface {
  functions: {
    "getL1CallValue()": FunctionFragment;
    "l1ERC20Gateway()": FunctionFragment;
    "l1Inbox()": FunctionFragment;
    "l2GasLimit()": FunctionFragment;
    "l2GasPrice()": FunctionFragment;
    "l2MaxSubmissionCost()": FunctionFragment;
    "l2RefundL2Address()": FunctionFragment;
    "relayMessage(address,bytes)": FunctionFragment;
    "relayTokens(address,address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getL1CallValue", values?: undefined): string;
  encodeFunctionData(functionFragment: "l1ERC20Gateway", values?: undefined): string;
  encodeFunctionData(functionFragment: "l1Inbox", values?: undefined): string;
  encodeFunctionData(functionFragment: "l2GasLimit", values?: undefined): string;
  encodeFunctionData(functionFragment: "l2GasPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "l2MaxSubmissionCost", values?: undefined): string;
  encodeFunctionData(functionFragment: "l2RefundL2Address", values?: undefined): string;
  encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
  encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;

  decodeFunctionResult(functionFragment: "getL1CallValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l1ERC20Gateway", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l1Inbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l2GasLimit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l2GasPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l2MaxSubmissionCost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l2RefundL2Address", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;

  events: {
    "HubPoolChanged(address)": EventFragment;
    "L2GasLimitSet(uint32)": EventFragment;
    "L2GasPriceSet(uint256)": EventFragment;
    "L2MaxSubmissionCostSet(uint256)": EventFragment;
    "L2RefundL2AddressSet(address)": EventFragment;
    "MessageRelayed(address,bytes)": EventFragment;
    "TokensRelayed(address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "HubPoolChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L2GasLimitSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L2GasPriceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L2MaxSubmissionCostSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L2RefundL2AddressSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensRelayed"): EventFragment;
}

export type HubPoolChangedEvent = TypedEvent<[string] & { newHubPool: string }>;

export type L2GasLimitSetEvent = TypedEvent<[number] & { newL2GasLimit: number }>;

export type L2GasPriceSetEvent = TypedEvent<[BigNumber] & { newL2GasPrice: BigNumber }>;

export type L2MaxSubmissionCostSetEvent = TypedEvent<[BigNumber] & { newL2MaxSubmissionCost: BigNumber }>;

export type L2RefundL2AddressSetEvent = TypedEvent<[string] & { newL2RefundL2Address: string }>;

export type MessageRelayedEvent = TypedEvent<[string, string] & { target: string; message: string }>;

export type TokensRelayedEvent = TypedEvent<
  [string, string, BigNumber, string] & {
    l1Token: string;
    l2Token: string;
    amount: BigNumber;
    to: string;
  }
>;

export class ArbitrumAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ArbitrumAdapterInterface;

  functions: {
    getL1CallValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    l1ERC20Gateway(overrides?: CallOverrides): Promise<[string]>;

    l1Inbox(overrides?: CallOverrides): Promise<[string]>;

    l2GasLimit(overrides?: CallOverrides): Promise<[number]>;

    l2GasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    l2MaxSubmissionCost(overrides?: CallOverrides): Promise<[BigNumber]>;

    l2RefundL2Address(overrides?: CallOverrides): Promise<[string]>;

    relayMessage(
      target: string,
      message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    relayTokens(
      l1Token: string,
      l2Token: string,
      amount: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;

  l1ERC20Gateway(overrides?: CallOverrides): Promise<string>;

  l1Inbox(overrides?: CallOverrides): Promise<string>;

  l2GasLimit(overrides?: CallOverrides): Promise<number>;

  l2GasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  l2MaxSubmissionCost(overrides?: CallOverrides): Promise<BigNumber>;

  l2RefundL2Address(overrides?: CallOverrides): Promise<string>;

  relayMessage(
    target: string,
    message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  relayTokens(
    l1Token: string,
    l2Token: string,
    amount: BigNumberish,
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;

    l1ERC20Gateway(overrides?: CallOverrides): Promise<string>;

    l1Inbox(overrides?: CallOverrides): Promise<string>;

    l2GasLimit(overrides?: CallOverrides): Promise<number>;

    l2GasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    l2MaxSubmissionCost(overrides?: CallOverrides): Promise<BigNumber>;

    l2RefundL2Address(overrides?: CallOverrides): Promise<string>;

    relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;

    relayTokens(
      l1Token: string,
      l2Token: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "HubPoolChanged(address)"(newHubPool?: null): TypedEventFilter<[string], { newHubPool: string }>;

    HubPoolChanged(newHubPool?: null): TypedEventFilter<[string], { newHubPool: string }>;

    "L2GasLimitSet(uint32)"(newL2GasLimit?: null): TypedEventFilter<[number], { newL2GasLimit: number }>;

    L2GasLimitSet(newL2GasLimit?: null): TypedEventFilter<[number], { newL2GasLimit: number }>;

    "L2GasPriceSet(uint256)"(newL2GasPrice?: null): TypedEventFilter<[BigNumber], { newL2GasPrice: BigNumber }>;

    L2GasPriceSet(newL2GasPrice?: null): TypedEventFilter<[BigNumber], { newL2GasPrice: BigNumber }>;

    "L2MaxSubmissionCostSet(uint256)"(
      newL2MaxSubmissionCost?: null
    ): TypedEventFilter<[BigNumber], { newL2MaxSubmissionCost: BigNumber }>;

    L2MaxSubmissionCostSet(
      newL2MaxSubmissionCost?: null
    ): TypedEventFilter<[BigNumber], { newL2MaxSubmissionCost: BigNumber }>;

    "L2RefundL2AddressSet(address)"(
      newL2RefundL2Address?: null
    ): TypedEventFilter<[string], { newL2RefundL2Address: string }>;

    L2RefundL2AddressSet(newL2RefundL2Address?: null): TypedEventFilter<[string], { newL2RefundL2Address: string }>;

    "MessageRelayed(address,bytes)"(
      target?: null,
      message?: null
    ): TypedEventFilter<[string, string], { target: string; message: string }>;

    MessageRelayed(
      target?: null,
      message?: null
    ): TypedEventFilter<[string, string], { target: string; message: string }>;

    "TokensRelayed(address,address,uint256,address)"(
      l1Token?: null,
      l2Token?: null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { l1Token: string; l2Token: string; amount: BigNumber; to: string }
    >;

    TokensRelayed(
      l1Token?: null,
      l2Token?: null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { l1Token: string; l2Token: string; amount: BigNumber; to: string }
    >;
  };

  estimateGas: {
    getL1CallValue(overrides?: CallOverrides): Promise<BigNumber>;

    l1ERC20Gateway(overrides?: CallOverrides): Promise<BigNumber>;

    l1Inbox(overrides?: CallOverrides): Promise<BigNumber>;

    l2GasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    l2GasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    l2MaxSubmissionCost(overrides?: CallOverrides): Promise<BigNumber>;

    l2RefundL2Address(overrides?: CallOverrides): Promise<BigNumber>;

    relayMessage(
      target: string,
      message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    relayTokens(
      l1Token: string,
      l2Token: string,
      amount: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getL1CallValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l1ERC20Gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l1Inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2GasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2GasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2MaxSubmissionCost(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2RefundL2Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relayMessage(
      target: string,
      message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    relayTokens(
      l1Token: string,
      l2Token: string,
      amount: BigNumberish,
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}