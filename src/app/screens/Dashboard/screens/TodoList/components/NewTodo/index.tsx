import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '~components/FormInput';
import { useDispatch } from '~contexts/TodosContext';
import { actionCreators } from '~contexts/TodosContext/reducer';

import { FIELDS } from '../../constants';
import { buildTodo } from '../../utils';

function NewTodo() {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'all',
    defaultValues: { [FIELDS.newTodo]: '' },
    shouldFocusError: true
  });
  const dispatch = useDispatch();

  const onSubmit = (data: { [key: string]: string }) => {
    dispatch(actionCreators.addTodo(buildTodo(data[FIELDS.newTodo])));
    reset();
  };

  return (
    <form className="row middle m-bottom-3" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        error={errors[FIELDS.newTodo]?.message}
        label="New Todo"
        name={FIELDS.newTodo}
        placeholder="Write your todo"
        className="m-right-2"
        inputRef={register({
          required: 'Todo is required',
          minLength: { value: 3, message: 'Todo should have at least 3 characters' }
        })}
      />
      <button className="button" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default NewTodo;
