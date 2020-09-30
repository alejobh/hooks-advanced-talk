import React, { useState, useLayoutEffect, useEffect } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

const HUNDRED = 100;
const generateRandom = () => Math.floor(Math.random() * HUNDRED) + 1;

function Example1() {
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
    <div className="column center middle m-bottom-5 separator">
      <h2 className="m-bottom-2">Example 1</h2>
      <button className="button m-bottom-2" type="button" onClick={() => setValue1(0)}>
        Random Value useLayoutEffect
      </button>
      <p className={clsx('m-bottom-10', { [styles.big]: value1 === 0 })}>{value1}</p>
      <button className="button m-bottom-2" type="button" onClick={() => setValue2(0)}>
        Random Value useEffect
      </button>
      <p className={clsx('m-bottom-4', { [styles.big]: value2 === 0 })}>{value2}</p>
    </div>
  );
}

export default Example1;
