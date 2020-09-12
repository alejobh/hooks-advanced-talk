import React from 'react';

import SquareFunctional from './components/SquareFunctional';
import SquareClassComponent from './components/SquareClassComponent';
import ScreenView from '~components/ScreenView';

function UseState() {
  return (
    <ScreenView title="useState example">
      <SquareFunctional />
      <SquareClassComponent />
    </ScreenView>
  );
}

export default UseState;
