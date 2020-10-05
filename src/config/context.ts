import { createContext, useContext, Dispatch } from 'react';

export const contextFactory = <State, Action>(initialState: State) => {
  interface Store {
    state: State;
    dispatch: Dispatch<Action>;
  }

  const Context = createContext<Store>({
    state: { ...initialState },
    // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
    dispatch: () => {}
  });

  const useSelector = <T>(selector: (arg: State) => T) => {
    const { state } = useContext(Context);
    return selector(state);
  };

  const useDispatch = () => {
    const { dispatch } = useContext(Context);
    return dispatch;
  };

  return { useSelector, Context, useDispatch };
};

export const contextFactoryV2 = <State, Action>(initialState: State) => {
  const StateContext = createContext<State>({ ...initialState });

  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  const DispatchContext = createContext<Dispatch<Action>>(() => {});

  const useSelector = <T>(selector: (arg: State) => T) => {
    const state = useContext(StateContext);
    return selector(state);
  };

  const useDispatch = () => {
    const dispatch = useContext(DispatchContext);
    return dispatch;
  };

  return { useSelector, StateContext, DispatchContext, useDispatch };
};
