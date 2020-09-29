import React from 'react';
// import { useForm } from 'react-hook-form';

import ScreenView from '~components/ScreenView';

import NewTodo from './components/NewTodo';

function TodoList() {
  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <ScreenView title="Todo List with Context and React Hook Form" smallScreen={false}>
      <NewTodo />
    </ScreenView>
  );
}

export default TodoList;
