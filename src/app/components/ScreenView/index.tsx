import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import paths from '~components/Routes/paths';

import styles from './styles.module.scss';

interface Props {
  title: string;
  children: ReactNode;
}
function ScreenView({ children, title }: Props) {
  return (
    <div className={`full-width column middle center ${styles.container}`}>
      <h1 className="m-bottom-8">{title}</h1>
      {children}
      <NavLink className="m-top-10" to={paths.home}>
        Back
      </NavLink>
    </div>
  );
}

export default ScreenView;
