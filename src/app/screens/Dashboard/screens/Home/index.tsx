import React, { useEffect, useState } from 'react';

import paths from '~components/Routes/paths';
import { getSize } from '~app/hooks/useWindowSize';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import ExampleLink from './components/ExampleLink';

function Home() {
  const [windowSize, setWindowSize] = useState(getSize(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={`${styles.text} m-bottom-6`}>Advanced Hooks & Context</p>
        <div className={['xxs', 'xs', 'sm'].includes(windowSize) ? 'col' : 'row'}>
          <div className="col spacing">
            <ExampleLink path={paths.useState} />
            <ExampleLink path={paths.useLayoutEffect} />
            <ExampleLink path={paths.useRef} />
            <ExampleLink path={paths.useCallbackMemo} />
          </div>
          <div className="col spacing">
            <ExampleLink path={paths.useRequest} />
            <ExampleLink path={paths.reactQuery} />
            <ExampleLink path={paths.todo} />
            <ExampleLink path={paths.useWindowSize} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
