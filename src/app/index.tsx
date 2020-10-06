import React from 'react';

import '../scss/application.scss';

import { reducer, INITIAL_STATE, Action, ExamplesState } from '~app/contexts/ExamplesContext/reducer';
import { Context } from '~app/contexts/ExamplesContext';
import withProvider from '~components/ProviderWrapper';

import Routes from './components/Routes';
import { EXAMPLES_LOCAL_STORAGE_KEY } from './contexts/ExamplesContext/constants';

function App() {
  return <Routes />;
}

export default withProvider<{}, ExamplesState, Action>({
  Context,
  reducer,
  initialState: INITIAL_STATE,
  localStorageKey: EXAMPLES_LOCAL_STORAGE_KEY
})(App);
