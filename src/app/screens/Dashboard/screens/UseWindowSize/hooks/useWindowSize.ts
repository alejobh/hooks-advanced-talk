import { useState, useEffect, useDebugValue } from 'react';

const SCREEN_SIZES = [
  { name: 'xxs', width: 320 },
  { name: 'xs', width: 375 },
  { name: 'sm', width: 550 },
  { name: 'md', width: 768 },
  { name: 'lg', width: 1024 }
] as const;
// By using as const we get a union of literal types returned by getSize

const getSize = (size: number) =>
  SCREEN_SIZES.find(sz => sz.width >= size)?.name || SCREEN_SIZES[SCREEN_SIZES.length - 1].name;

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
