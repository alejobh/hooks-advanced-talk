import { contextFactory } from '~config/context';

import { ExamplesState, Action, INITIAL_STATE } from './reducer';

export const { useSelector, Context, useDispatch } = contextFactory<ExamplesState, Action>(INITIAL_STATE);
