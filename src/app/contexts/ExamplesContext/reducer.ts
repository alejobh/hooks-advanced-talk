import LocalStorageService from '~services/LocalStorageService';

import { EXAMPLES_LOCAL_STORAGE_KEY } from './constants';

export interface User {
  id: number;
  sessionToken: string;
}

export interface ExamplesState {
  understood: string[];
}

export const INITIAL_STATE = {
  user: null,
  understood: LocalStorageService.getValue(EXAMPLES_LOCAL_STORAGE_KEY)?.understood || []
};

enum ActionTypes {
  SET_EXAMPLE_UNDERSTOOD = 'SET_EXAMPLE_UNDERSTOOD'
}

interface SetExampleUnderstood {
  type: ActionTypes.SET_EXAMPLE_UNDERSTOOD;
  payload: string;
}

export type Action = SetExampleUnderstood;

export const actionCreators = {
  toggleUnderstood: (example: string): SetExampleUnderstood => ({
    type: ActionTypes.SET_EXAMPLE_UNDERSTOOD,
    payload: example
  })
};

export const reducer = (state: ExamplesState, action: Action): ExamplesState => {
  switch (action.type) {
    case ActionTypes.SET_EXAMPLE_UNDERSTOOD: {
      return {
        ...state,
        understood: state.understood.find(example => example === action.payload)
          ? state.understood.filter(example => example !== action.payload)
          : [...state.understood, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};
