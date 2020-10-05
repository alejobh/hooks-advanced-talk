import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { useSelector } from '~app/contexts/GlobalContext';

import styles from './styles.module.scss';

interface Props {
  path: { route: string; name: string };
}

function ExampleLink({ path }: Props) {
  const understoods = useSelector(state => state.understood);
  const isUnderstood = understoods.find(understood => understood === path.route);
  return (
    <div className="row">
      <NavLink className="m-bottom-4 row middle" to={path.route}>
        {path.name}
      </NavLink>
      <span className={clsx(styles.understood, { [styles.new]: !isUnderstood })}>
        {isUnderstood ? '[Read]' : 'New!'}
      </span>
    </div>
  );
}

export default ExampleLink;
