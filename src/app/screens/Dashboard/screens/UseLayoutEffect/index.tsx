import React from 'react';

import ScreenView from '~components/ScreenView';

import Example1 from './components/Example1';
import Example2 from './components/Example2';

function UseLayoutEffect() {
  return (
    <ScreenView title="useLayoutEffect example">
      <Example1 />
      <Example2 />
    </ScreenView>
  );
}

export default UseLayoutEffect;
