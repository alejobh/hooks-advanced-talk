import React, { useState, useLayoutEffect, useEffect } from 'react';

import ScreenView from '~components/ScreenView';

import styles from './styles.module.scss';

// eslint-disable-next-line no-magic-numbers
const generateRandom = () => Math.floor(Math.random() * 100);

function UseLayoutEffect() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useLayoutEffect(() => {
    if (value1 === 0) {
      setValue1(generateRandom());
    }
  }, [value1, value2]);

  useEffect(() => {
    if (value2 === 0) {
      setValue2(generateRandom());
    }
  }, [value2]);

  return (
    <ScreenView title="useLayoutEffect example">
      <button type="button" onClick={() => setValue1(0)}>
        Random Value useLayoutEffect
      </button>
      <p className={`m-bottom-10 ${value1 === 0 ? styles.big : ''}`}>{value1}</p>
      <button type="button" onClick={() => setValue2(0)}>
        Random Value useEffect
      </button>
      <p className={`m-bottom-4 ${value2 === 0 ? styles.big : ''}`}>{value2}</p>
    </ScreenView>
  );
}

export default UseLayoutEffect;
