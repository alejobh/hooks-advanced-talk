import React from 'react';

import { useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

function DeleteAll() {
  console.count('Render DeleteAll');

  const dispatch = useDispatch();

  const onClear = () => {
    dispatch(actionCreators.deleteAll());
  };

  return (
    <button type="button" className="button" onClick={onClear}>
      Delete All
    </button>
  );
}

export default DeleteAll;
