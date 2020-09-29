import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import paths from '~components/Routes/paths';
import { useDispatch, useSelector } from '~contexts/GlobalContext';
import { actionCreators } from '~contexts/GlobalContext/reducer';

import styles from './styles.module.scss';

interface Props {
  title: string;
  children: ReactNode;
  smallScreen?: boolean;
  route: string;
}

function ScreenView({ children, title, route, smallScreen = true }: Props) {
  const dispatch = useDispatch();
  const understoods: string[] = useSelector(state => state.understood);

  const isUnderstood = understoods.find(example => example === route);

  const handleSetUnderstood = () => {
    dispatch(actionCreators.setExampleUnderstood(route));
  };

  return (
    <div
      className={`full-width column middle center ${styles.container} ${
        smallScreen ? styles.smallScren : ''
      }`}
    >
      <h1 className={clsx('m-bottom-8', { [styles.understood]: isUnderstood })}>{title}</h1>
      {children}
      {!isUnderstood && (
        <div className="row middle m-top-8">
          <h2 className="m-right-2">Te quedó claro?</h2>
          <button type="button" onClick={handleSetUnderstood} className="button">
            Marcálo como aprendido
          </button>
        </div>
      )}
      <NavLink className="m-top-10" to={paths.home.route}>
        Back
      </NavLink>
    </div>
  );
}

export default ScreenView;
