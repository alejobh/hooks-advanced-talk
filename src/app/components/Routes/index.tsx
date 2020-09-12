import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Suspense from '../Suspense';

import { ROUTES } from './constants';
import RouteItem from './components/RouteItem';
import styles from './styles.module.scss';

function Routes() {
  return (
    <Router>
      <div className={styles.container}>
        <Suspense>
          <Switch>
            {ROUTES.map(({ path, ...config }) => (
              <RouteItem key={path} path={path} {...config} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
