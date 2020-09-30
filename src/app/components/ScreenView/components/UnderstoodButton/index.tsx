import React from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from '~app/contexts/GlobalContext';
import { actionCreators } from '~app/contexts/GlobalContext/reducer';

function UnderstoodButton() {
  const location = useLocation();
  const dispatch = useDispatch();
  const understoods = useSelector(state => state.understood);

  const isUnderstood = understoods.find(example => example === location.pathname);

  const handleSetUnderstood = () => {
    dispatch(actionCreators.toggleUnderstood(location.pathname));
  };

  return (
    <div className="row middle m-top-8">
      <button type="button" onClick={handleSetUnderstood} className="button">
        {isUnderstood ? 'Mark as unread' : 'Mark as read'}
      </button>
    </div>
  );
}

export default UnderstoodButton;
