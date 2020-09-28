import React from 'react';

import ScreenView from '~components/ScreenView';

import useWindowSize from './hooks/useWindowSize';

function UseWindowSize() {
  const windowSize = useWindowSize();
  return (
    <ScreenView title="useWindowSize example">
      {['xxs', 'xs', 'sm'].includes(windowSize) && <h2>Only for small screens</h2>}
      {windowSize === 'md' && <h2>Only for medium screens</h2>}
      {windowSize === 'lg' && <h2>Only for large screens</h2>}
    </ScreenView>
  );
}

export default UseWindowSize;
