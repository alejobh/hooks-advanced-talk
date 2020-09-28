import React, { useState, useRef, useEffect } from 'react';

const TIMER_INTERVAL = 1000;

function MutableValue() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, TIMER_INTERVAL);
  }, []);

  const handleStop = () => intervalRef.current && clearInterval(intervalRef.current);

  return (
    <>
      <h2>Mutable Value Container</h2>
      <p>Timer: {timer}</p>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

export default MutableValue;
