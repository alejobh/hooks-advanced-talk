import React, { useState, useRef } from 'react';

import { Nullable } from '~utils/types';

import Message from './components/Message';
import styles from './styles.module.scss';
import MessageLayoutEffect from './components/MessageLayoutEffect';

function Example2() {
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const box1Ref = useRef<Nullable<HTMLButtonElement>>(null);
  const box2Ref = useRef<Nullable<HTMLButtonElement>>(null);

  return (
    <div className="column center">
      <h2 className="m-bottom-3">Example 2</h2>
      <div className="row center space-between">
        <div className={`${styles.container} m-right-10`}>
          <button type="button" ref={box1Ref} className="box" onClick={() => setShowMessage1(prev => !prev)}>
            useEffect
          </button>
          {showMessage1 && <Message boxRef={box1Ref}>useEffect message</Message>}
        </div>
        <div className={styles.container}>
          <button type="button" ref={box2Ref} className="box" onClick={() => setShowMessage2(prev => !prev)}>
            useLayoutEffect
          </button>
          {showMessage2 && (
            <MessageLayoutEffect boxRef={box2Ref}>useLayoutEffect message</MessageLayoutEffect>
          )}
        </div>
      </div>
    </div>
  );
}

export default Example2;
