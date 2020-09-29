import React from 'react';

import ScreenView from '~components/ScreenView';
import withProvider from '~components/ProviderWrapper';
import { TodosState, Action, reducer, INITIAL_STATE } from '~contexts/TodosContext/reducer';
import { Context } from '~contexts/TodosContext';
import { TODOS_LOCAL_STORAGE_KEY } from '~contexts/TodosContext/constants';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function TodoList() {
  return (
    <ScreenView title="Todo List with Context and React Hook Form" smallScreen={false}>
      <NewTodo />
      <Todos />
    </ScreenView>
  );
}

// First generic type is the Props interface if exists
export default withProvider<{}, TodosState, Action>({
  Context,
  reducer,
  initialState: INITIAL_STATE,
  localStorageKey: TODOS_LOCAL_STORAGE_KEY
})(TodoList);
