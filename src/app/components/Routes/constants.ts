import { lazy } from 'react';
import i18next from 'i18next';

import PATHS from './paths';

const Home = lazy(() => import('~screens/Dashboard'));
const UseState = lazy(() => import('~screens/Dashboard/screens/UseState'));
const UseLayoutEffect = lazy(() => import('~screens/Dashboard/screens/UseLayoutEffect'));
const UseRequestExample = lazy(() => import('~screens/Dashboard/screens/UseRequestExample'));

/* When adding routes, add them ABOVE the Home route
 * or it will redirect you to incorrect screens */
export const ROUTES = [
  {
    exact: true,
    path: PATHS.useRequest,
    component: UseRequestExample,
    title: i18next.t('Routes:homeTitle'),
    description: i18next.t('Routes:homeDescription'),
    redirectTo: ''
  },
  {
    exact: true,
    path: PATHS.useLayoutEffect,
    component: UseLayoutEffect,
    title: i18next.t('Routes:homeTitle'),
    description: i18next.t('Routes:homeDescription'),
    redirectTo: ''
  },
  {
    exact: true,
    path: PATHS.useState,
    component: UseState,
    title: i18next.t('Routes:homeTitle'),
    description: i18next.t('Routes:homeDescription'),
    redirectTo: ''
  },
  {
    exact: false,
    path: PATHS.home,
    component: Home,
    title: i18next.t('Routes:homeTitle'),
    description: i18next.t('Routes:homeDescription'),
    redirectTo: ''
  }
];
