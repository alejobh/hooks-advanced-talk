import React, { useState, useEffect, MouseEvent } from 'react';

import { printCoords, initial } from '../../utils';

function Square() {
  const [square1, setSquare1] = useState(initial);
  const [square2, setSquare2] = useState(initial.current);
  const [square1Qty, setSquare1Qty] = useState(0);
  const [square2Qty, setSquare2Qty] = useState(0);

  const handleSetCoords1 = (evt: MouseEvent) => {
    evt.persist();
    setSquare1(prev => {
      setSquare1Qty(prevS => prevS + 1);
      return {
        previous: prev.current,
        current: { x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY }
      };
    });
  };

  const handleSetCoords2 = (evt: MouseEvent) => {
    evt.persist();
    // Multiple calls
    setSquare2({ x: 0, y: 0 });
    setSquare2({ x: 0, y: 0 });
    setSquare2({ x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY });
  };

  useEffect(() => {
    if (square2.x && square2.y) {
      setSquare2Qty(prev => prev + 1);
    }
  }, [square2]);

  return (
    <div className="column full-width center m-bottom-4">
      <h2 className="m-bottom-4">Functional Component</h2>
      <div className="row">
        <div className="column middle center square m-right-4" onClick={handleSetCoords1}>
          <p className="bold">Mouse position</p>
          <p>Previous: {printCoords(square1.previous)}</p>
          <p>Current: {printCoords(square1.current)}</p>
          <p>Calls: {square1Qty}</p>
        </div>
        <div className="column middle center square" onClick={handleSetCoords2}>
          <p className="bold">Mouse position</p>
          <p>Position: {printCoords(square2)}</p>
          <p>Calls: {square2Qty}</p>
        </div>
      </div>
    </div>
  );
}

export default Square;
