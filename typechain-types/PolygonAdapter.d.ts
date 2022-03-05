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

interface PolygonAdapterInterface extends ethers.utils.Interface {
  functions: {
    "fxStateSender()": FunctionFragment;
    "l1Weth()": FunctionFragment;
    "relayMessage(address,bytes)": FunctionFragment;
    "relayTokens(address,address,uint256,address)": FunctionFragment;
    "rootChainManager()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "fxStateSender", values?: undefined): string;
  encodeFunctionData(functionFragment: "l1Weth", values?: undefined): string;
  encodeFunctionData(functionFragment: "relayMessage", values: [string, BytesLike]): string;
  encodeFunctionData(functionFragment: "relayTokens", values: [string, string, BigNumberish, string]): string;
  encodeFunctionData(functionFragment: "rootChainManager", values?: undefined): string;

  decodeFunctionResult(functionFragment: "fxStateSender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l1Weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rootChainManager", data: BytesLike): Result;

  events: {
    "HubPoolChanged(address)": EventFragment;
    "MessageRelayed(address,bytes)": EventFragment;
    "TokensRelayed(address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "HubPoolChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageRelayed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensRelayed"): EventFragment;
}

export type HubPoolChangedEvent = TypedEvent<[string] & { newHubPool: string }>;

export type MessageRelayedEvent = TypedEvent<[string, string] & { target: string; message: string }>;

export type TokensRelayedEvent = TypedEvent<
  [string, string, BigNumber, string] & {
    l1Token: string;
    l2Token: string;
    amount: BigNumber;
    to: string;
  }
>;

export class PolygonAdapter extends BaseContract {
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

  interface: PolygonAdapterInterface;

  functions: {
    fxStateSender(overrides?: CallOverrides): Promise<[string]>;

    l1Weth(overrides?: CallOverrides): Promise<[string]>;

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

    rootChainManager(overrides?: CallOverrides): Promise<[string]>;
  };

  fxStateSender(overrides?: CallOverrides): Promise<string>;

  l1Weth(overrides?: CallOverrides): Promise<string>;

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

  rootChainManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    fxStateSender(overrides?: CallOverrides): Promise<string>;

    l1Weth(overrides?: CallOverrides): Promise<string>;

    relayMessage(target: string, message: BytesLike, overrides?: CallOverrides): Promise<void>;

    relayTokens(
      l1Token: string,
      l2Token: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rootChainManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "HubPoolChanged(address)"(newHubPool?: null): TypedEventFilter<[string], { newHubPool: string }>;

    HubPoolChanged(newHubPool?: null): TypedEventFilter<[string], { newHubPool: string }>;

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
    fxStateSender(overrides?: CallOverrides): Promise<BigNumber>;

    l1Weth(overrides?: CallOverrides): Promise<BigNumber>;

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

    rootChainManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    fxStateSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l1Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    rootChainManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}