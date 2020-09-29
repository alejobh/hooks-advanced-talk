import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from '~app/contexts/GlobalContext';

import styles from './styles.module.scss';

interface Props {
  path: { route: string; name: string };
}

function ExampleLink({ path }: Props) {
  const understoods: string[] = useSelector(state => state.understood);
  const isUnderstood = understoods.find(understood => understood === path.route);
  return (
    <NavLink className="m-bottom-4 row middle" to={path.route}>
      {path.name}
      {isUnderstood && <span className={styles.understood}>[Entendido]</span>}
    </NavLink>
  );
}

export default ExampleLink;
