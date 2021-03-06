import React from 'react';
import clsx from 'clsx';

import { Todo } from '~utils/types';
import CustomCheckbox from '~components/Checkbox';
import { useDispatch } from '~screens/Dashboard/screens/TodoList/context';
import { actionCreators } from '~screens/Dashboard/screens/TodoList/context/reducer';

import styles from './styles.module.scss';

function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(actionCreators.deleteTodo(todo.id));
  };

  const handleToggleStatus = () => {
    dispatch(actionCreators.toggleTodoStatus(todo.id));
  };

  return (
    <div className="row middle space-around m-bottom-2">
      <p
        className={clsx('m-right-2', styles.text, {
          [styles.done]: todo.isDone
        })}
      >
        {todo.text}
      </p>
      <CustomCheckbox
        className="m-right-2"
        name={`checkbox-${todo.id}`}
        value={todo.isDone}
        onChange={handleToggleStatus}
      />
      <button type="button" className={`button ${styles.deleteButton}`} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
