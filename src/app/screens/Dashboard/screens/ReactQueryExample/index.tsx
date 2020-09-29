import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';

import ScreenView from '~components/ScreenView';
import paths from '~components/Routes/paths';

import Movies from './components/Movies';

const queryCache = new QueryCache();

function UseRequestExample() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ScreenView title="React Query example" route={paths.reactQuery.route} smallScreen={false}>
        <Movies />
      </ScreenView>
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  );
}

export default UseRequestExample;
