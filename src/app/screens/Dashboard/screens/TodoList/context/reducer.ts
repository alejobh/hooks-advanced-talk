import { Todo } from '~utils/types';
import LocalStorageService from '~services/LocalStorageService';

import { TODOS_LOCAL_STORAGE_KEY } from './constants';

export interface TodosState {
  todos: Todo[];
}

export const INITIAL_STATE = {
  todos: LocalStorageService.getValue(TODOS_LOCAL_STORAGE_KEY)?.todos || []
};

enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS',
  DELETE_ALL = 'DELETE_ALL'
}

interface AddTodo {
  type: ActionTypes.ADD_TODO;
  payload: Todo;
}

interface DeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

interface ToggleTodoStatus {
  type: ActionTypes.TOGGLE_TODO_STATUS;
  payload: number;
}

interface DeleteAll {
  type: ActionTypes.DELETE_ALL;
}

export type Action = AddTodo | DeleteTodo | ToggleTodoStatus | DeleteAll;

export const actionCreators = {
  addTodo: (todo: Todo): AddTodo => ({ type: ActionTypes.ADD_TODO, payload: todo }),
  deleteTodo: (id: number): DeleteTodo => ({ type: ActionTypes.DELETE_TODO, payload: id }),
  toggleTodoStatus: (id: number): ToggleTodoStatus => ({ type: ActionTypes.TOGGLE_TODO_STATUS, payload: id }),
  deleteAll: (): DeleteAll => ({ type: ActionTypes.DELETE_ALL })
};

export const reducer = (state: TodosState, action: Action): TodosState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case ActionTypes.DELETE_TODO: {
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    }
    case ActionTypes.DELETE_ALL: {
      return { ...state, todos: [] };
    }
    case ActionTypes.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        })
      };
    }
    default: {
      return state;
    }
  }
};
