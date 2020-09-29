import React from 'react';

import ScreenView from '~components/ScreenView';
import useWindowSize from '~hooks/useWindowSize';
import { SCREEN_SIZES, SMALL_SCREENS } from '~constants/sizes';

function UseWindowSize() {
  const windowSize = useWindowSize();
  return (
    <ScreenView title="useWindowSize example">
      {SMALL_SCREENS.includes(windowSize) && <h2>Only for small screens</h2>}
      {windowSize === SCREEN_SIZES.md.name && <h2>Only for medium screens</h2>}
      {windowSize === SCREEN_SIZES.lg.name && <h2>Only for large screens</h2>}
    </ScreenView>
  );
}

export default UseWindowSize;
