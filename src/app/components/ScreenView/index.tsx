import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import paths from '~components/Routes/paths';

import styles from './styles.module.scss';
import UnderstoodButton from './components/UnderstoodButton';

interface Props {
  title: string;
  children: ReactNode;
  smallScreen?: boolean;
}

function ScreenView({ children, title, smallScreen = true }: Props) {
  return (
    <div
      className={clsx('full-width column middle center', styles.container, {
        [styles.smallScren]: smallScreen
      })}
    >
      <h1 className={clsx('m-bottom-8')}>{title}</h1>
      {children}
      <UnderstoodButton />
      <NavLink className="m-top-10" to={paths.home.route}>
        Back
      </NavLink>
    </div>
  );
}

export default ScreenView;
