import React, { useReducer, useEffect } from 'react';

import LocalStorageService from '~services/LocalStorageService';

interface ActionType {
  type: string;
}

interface Props<U extends {}, V> {
  Context: React.Context<any>;
  reducer: React.Reducer<U, V>;
  initialState: U;
  localStorageKey?: string;
}

const withProvider = <T extends {}, U, V extends ActionType>({
  Context,
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
      <Context.Provider value={{ state, dispatch }}>
        <WrappedComponent {...props} />
      </Context.Provider>
    );
  }

  return ProviderWrapper;
};

export default withProvider;
