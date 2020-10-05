import React, { useReducer, useEffect } from 'react';

import LocalStorageService from '~services/LocalStorageService';

interface ActionType {
  type: string;
}

interface Props<U extends {}, V> {
  StateContext: React.Context<any>;
  DispatchContext: React.Context<any>;
  reducer: React.Reducer<U, V>;
  initialState: U;
  localStorageKey?: string;
}

const withContextReducerProvider = <T extends {}, U, V extends ActionType>({
  StateContext,
  DispatchContext,
  reducer,
  initialState,
  localStorageKey
}: Props<U, V>) => (WrappedComponent: React.ComponentType<T>) => {
  function ProviderWrapper(props: T) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // LocalStorage save state
    useEffect(() => {
      if (localStorageKey) {
        LocalStorageService.setValue(localStorageKey, state);
      }
    }, [state]);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <WrappedComponent {...props} />
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  }

  return ProviderWrapper;
};

export default withContextReducerProvider;
