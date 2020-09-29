import { useState, useEffect, useDebugValue } from 'react';

import { SCREEN_SIZES } from '~constants/sizes';

const getSize = (size: number) => {
  const sizes = Object.values(SCREEN_SIZES);
  return sizes.find(sz => sz.width >= size)?.name || sizes[sizes.length - 1].name;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Usefull for libraries or common hooks
  useDebugValue(`${getSize(windowSize)} (${windowSize})`);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return getSize(windowSize);
};

export default useWindowSize;
