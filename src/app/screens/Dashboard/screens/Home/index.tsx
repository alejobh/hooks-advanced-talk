import React from 'react';
import { NavLink } from 'react-router-dom';

import paths from '~components/Routes/paths';
import withProvider from '~components/ProviderWrapper';

import logo from './assets/logo.svg';
import styles from './styles.module.scss';
import { Context } from './context';
import { reducer, INITIAL_STATE } from './reducer';

function Home() {
  // Example of how to use these custom hooks

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={`${styles.text} m-bottom-6`}>React advanced hooks</p>
        <NavLink to={paths.useState}>usestate</NavLink>
      </header>
    </div>
  );
}

export default withProvider({ Context, reducer, initialState: INITIAL_STATE })(Home);
