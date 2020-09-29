import { Nullable } from '~utils/types';
import LocalStorageService from '~services/LocalStorageService';

import { EXAMPLES_LOCAL_STORAGE_KEY } from './constants';

export interface User {
  id: number;
  sessionToken: string;
}

export interface GlobalState {
  user: Nullable<User>;
  understood: string[];
}

export interface Credentials {
  username: string;
  password: string;
}

export const INITIAL_STATE = {
  user: null,
  understood: LocalStorageService.getValue(EXAMPLES_LOCAL_STORAGE_KEY)?.understood || []
};

enum ActionTypes {
  SET_USER = 'SET_USER',
  RESET_USER = 'RESET_USER',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_EXAMPLE_UNDERSTOOD = 'SET_EXAMPLE_UNDERSTOOD'
}

interface SetUser {
  type: ActionTypes.SET_USER;
  payload: User;
}

interface ResetUser {
  type: ActionTypes.RESET_USER;
}

interface Login {
  type: ActionTypes.LOGIN;
  payload: Credentials;
}

interface Logout {
  type: ActionTypes.LOGOUT;
}

interface SetExampleUnderstood {
  type: ActionTypes.SET_EXAMPLE_UNDERSTOOD;
  payload: string;
}

export type Action = SetUser | ResetUser | Login | Logout | SetExampleUnderstood;

export const actionCreators = {
  setUser: (user: User): SetUser => ({ type: ActionTypes.SET_USER, payload: user }),
  resetUser: (): ResetUser => ({ type: ActionTypes.RESET_USER }),
  login: (credentials: Credentials): Login => ({ type: ActionTypes.LOGIN, payload: credentials }),
  logout: (): Logout => ({ type: ActionTypes.LOGOUT }),
  setExampleUnderstood: (example: string): SetExampleUnderstood => ({
    type: ActionTypes.SET_EXAMPLE_UNDERSTOOD,
    payload: example
  })
};

export const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.payload };
    }
    case 'RESET_USER': {
      return { ...state, user: null };
    }
    case ActionTypes.SET_EXAMPLE_UNDERSTOOD: {
      return { ...state, understood: [...state.understood, action.payload] };
    }
    default: {
      return state;
    }
  }
};
