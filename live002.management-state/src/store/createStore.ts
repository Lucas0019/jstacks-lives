import { useSyncExternalStore } from 'react';

type SetterFn<T> = (prevState: T) => Partial<T>;

type SetStateFn<T> = (partialState: Partial<T> | SetterFn<T>) => void;

export const createStore: TState = (
  createState: (setState: SetStateFn<TState>, getState: () => TState) => TState,
) => {
  let state: TState;
  let listeners: Set<() => void>;

  const notifyListeners = () => {
    listeners.forEach((listener) => listener()) as unknown as void;
  };

  const setState = (partialState: Partial<TState> | SetterFn<TState>) => {
    const newValue =
      typeof partialState === 'function' ? partialState(state) : partialState;

    state = {
      ...state,
      ...newValue,
    };

    notifyListeners();
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  const getState = () => state;

  const useStore = (selector: (currentState: TState) => TValue): TValue =>
    useSyncExternalStore(subscribe, () => selector(state));

  state = createState(setState, getState);
  listeners = new Set();

  return useStore;
};
