import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '~components/FormInput';

import { FIELDS } from '../../constants';

function NewTodo() {
  const { register, handleSubmit, errors } = useForm({
    mode: 'all',
    defaultValues: { [FIELDS.newTodo]: '' },
    shouldFocusError: true
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="row middle" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        error={errors[FIELDS.newTodo]?.message}
        label="New Todo"
        name={FIELDS.newTodo}
        placeholder="Write your todo"
        className="m-right-2"
        inputRef={register({
          required: 'Todo is required',
          minLength: { value: 4, message: 'Todo should have at least 4 characters' }
        })}
      />
      {/* <input
        type="text"
        placeholder="Write your todo"
        name="newTodo"
        ref={register({
          required: 'Todo is required',
          minLength: { value: 4, message: 'Todo should have at least 4 characters' }
        })}
      /> */}
      {/* {errors[FIELDS.newTodo] && <p>{errors[FIELDS.newTodo]?.message}</p>} */}
      <button className="button" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default NewTodo;
