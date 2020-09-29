import React from 'react';

import ScreenView from '~components/ScreenView';
import paths from '~components/Routes/paths';

import SquareFunctional from './components/SquareFunctional';
import SquareClassComponent from './components/SquareClassComponent';

function UseState() {
  return (
    <ScreenView title="useState example" route={paths.useState.route}>
      <SquareFunctional />
      <SquareClassComponent />
    </ScreenView>
  );
}

export default UseState;
