import React, { useState, useRef, useEffect } from 'react';

const TIMER_INTERVAL = 1000;

function MutableValue() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, TIMER_INTERVAL);

    return () => {
      // clear interval
      clearInterval(intervalRef?.current!);
    };
  }, []);

  const handleStop = () => intervalRef.current && clearInterval(intervalRef.current);

  return (
    <>
      <h2 className="m-bottom-2">Mutable Value Container</h2>
      <p className="m-bottom-2">Timer: {timer}</p>
      <button type="button" className="button" onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

export default MutableValue;
