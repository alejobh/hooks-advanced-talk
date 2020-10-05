import React from 'react';

import paths from '~components/Routes/paths';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import ExampleLink from './components/ExampleLink';

function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={`${styles.text} m-bottom-6`}>Advanced Hooks & Context</p>
        <div className="row">
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
