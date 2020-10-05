import React from 'react';

import { useSelector } from '../../context';

import TodoItem from './components/TodoItem';
import styles from './styles.module.scss';

function Todos() {
  const todos = useSelector(state => state.todos);

  return (
    <div className={`column ${styles.container}`}>
      <h2 className="m-bottom-2">My Todos</h2>
      {todos.length ? (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>You don&apos;t have todos</p>
      )}
    </div>
  );
}

export default Todos;
