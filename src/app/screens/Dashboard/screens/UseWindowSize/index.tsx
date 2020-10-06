import React, { useEffect, useState } from 'react';

import { getSize } from '~app/hooks/useWindowSize';
import ScreenView from '~components/ScreenView';

function UseWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <ScreenView title="useWindowSize example">
      {/* Next line is not strongly typed, could be extracted on a util function when needed  */}
      {['xxs', 'xs', 'sm'].includes(windowSize) && <h2>Only for small screens</h2>}
      {windowSize === 'md' && <h2>Only for medium screens</h2>}
      {windowSize === 'lg' && <h2>Only for large screens</h2>}
    </ScreenView>
  );
}

export default UseWindowSize;
