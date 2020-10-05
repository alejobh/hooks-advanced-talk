import { contextFactoryV2 } from '~config/context';

import { TodosState, Action, INITIAL_STATE } from './reducer';

export const { useSelector, StateContext, DispatchContext, useDispatch } = contextFactoryV2<
  TodosState,
  Action
>(INITIAL_STATE);
