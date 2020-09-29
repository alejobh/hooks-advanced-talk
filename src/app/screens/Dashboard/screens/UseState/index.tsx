import React from 'react';

import ScreenView from '~components/ScreenView';
import paths from '~components/Routes/paths';

import Square from './components/Square';
import SquareClassComponent from './components/SquareClassComponent';

function UseState() {
  return (
    <ScreenView title="useState example" route={paths.useState.route}>
      <Square />
      <SquareClassComponent />
    </ScreenView>
  );
}

export default UseState;
