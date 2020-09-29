import { contextFactory } from '~config/context';

import { TodosState, Action, INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory<TodosState, Action>(INITIAL_STATE);
