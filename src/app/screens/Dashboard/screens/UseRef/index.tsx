import React from 'react';

import ScreenView from '~components/ScreenView';

import MutableValue from './MutableValue';

function UseRef() {
  return (
    <ScreenView title="UseRef example">
      <MutableValue />
    </ScreenView>
  );
}

export default UseRef;
