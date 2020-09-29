import React from 'react';

import ScreenView from '~components/ScreenView';

import Square from './components/Square';
import SquareClassComponent from './components/SquareClassComponent';

function UseState() {
  return (
    <ScreenView title="useState example">
      <Square />
      <SquareClassComponent />
    </ScreenView>
  );
}

export default UseState;
