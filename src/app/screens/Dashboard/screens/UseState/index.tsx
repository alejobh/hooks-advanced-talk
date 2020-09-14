import React from 'react';

import ScreenView from '~components/ScreenView';

import SquareFunctional from './components/SquareFunctional';
import SquareClassComponent from './components/SquareClassComponent';

function UseState() {
  return (
    <ScreenView title="useState example">
      <SquareFunctional />
      <SquareClassComponent />
    </ScreenView>
  );
}

export default UseState;
