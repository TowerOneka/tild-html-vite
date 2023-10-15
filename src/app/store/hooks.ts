// import { AppDispatch } from "";
import { ActionCreatorsMapObject, bindActionCreators, AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch, useSelector as useSelectorHook, shallowEqual } from "react-redux";
import { AppDispatch } from ".";

export const useActionsCreator = <T extends ActionCreatorsMapObject>(actions: T): BoundActions<T> => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
};

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
  ...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;

export const useSelector = <TState, TSelected>(
  func: (state: TState, param?: string | number) => TSelected,
  param?: string | number,
) => useSelectorHook((state: TState) => func(state, param), shallowEqual);
