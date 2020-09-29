import React from 'react';

import '../scss/application.scss';

import { reducer, INITIAL_STATE, Action, GlobalState } from '~contexts/GlobalContext/reducer';
import { Context } from '~app/contexts/GlobalContext';
import withProvider from '~components/ProviderWrapper';

import Routes from './components/Routes';
import { EXAMPLES_LOCAL_STORAGE_KEY } from './contexts/GlobalContext/constants';

function App() {
  return <Routes />;
}

export default withProvider<{}, GlobalState, Action>({
  Context,
  reducer,
  initialState: INITIAL_STATE,
  localStorageKey: EXAMPLES_LOCAL_STORAGE_KEY
})(App);
