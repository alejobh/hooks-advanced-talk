import { useState, useEffect, useDebugValue } from 'react';

const SCREEN_SIZES = [
  { name: 'xxs', width: 320 },
  { name: 'xs', width: 375 },
  { name: 'sm', width: 550 },
  { name: 'md', width: 768 },
  { name: 'lg', width: 1024 }
] as const;
// By using as const we get a union of literal types returned by getSize

export const getSize = (size: number) => {
  const sizes = Object.values(SCREEN_SIZES);
  return sizes.find(sz => sz.width >= size)?.name || sizes[sizes.length - 1].name;
};

const useWindowSize = () => {
  console.log('TODO');
  return 'sm';
};

export default useWindowSize;
