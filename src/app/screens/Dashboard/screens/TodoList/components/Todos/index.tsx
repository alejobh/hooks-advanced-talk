import React from 'react';

import { useSelector } from '~contexts/TodosContext';
import { TodoI } from '~utils/types';

import Todo from './components/Todo';
import styles from './styles.module.scss';

function Todos() {
  const todos: TodoI[] = useSelector(state => state.todos);

  return (
    <div className={`column ${styles.container}`}>
      <h2 className="m-bottom-2">My Todos</h2>
      {todos.length ? todos.map(todo => <Todo key={todo.id} todo={todo} />) : <p>You dont have todos</p>}
    </div>
  );
}

export default Todos;
