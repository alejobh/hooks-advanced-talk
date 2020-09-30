import React, { useState, useLayoutEffect, useEffect } from 'react';
import clsx from 'clsx';

import ScreenView from '~components/ScreenView';

import styles from './styles.module.scss';

const HUNDRED = 100;
const generateRandom = () => Math.floor(Math.random() * HUNDRED) + 1;

function UseLayoutEffect() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useLayoutEffect(() => {
    if (value1 === 0) {
      setValue1(generateRandom());
    }
  }, [value1]);

  useEffect(() => {
    if (value2 === 0) {
      setValue2(generateRandom());
    }
  }, [value2]);

  return (
    <ScreenView title="useLayoutEffect example">
      <button className="button m-bottom-2" type="button" onClick={() => setValue1(0)}>
        Random Value useLayoutEffect
      </button>
      <p className={clsx('m-bottom-10', { [styles.big]: value1 === 0 })}>{value1}</p>
      <button className="button m-bottom-2" type="button" onClick={() => setValue2(0)}>
        Random Value useEffect
      </button>
      <p className={clsx('m-bottom-4', { [styles.big]: value2 === 0 })}>{value2}</p>
    </ScreenView>
  );
}

export default UseLayoutEffect;
