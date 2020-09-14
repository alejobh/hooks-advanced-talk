import React, { useState } from 'react';

import { SquareCoords } from '~utils/types';

import { printCoords, initial } from '../../utils';

function SquareFunctional() {
  const [square1, setSquare1] = useState<{
    previous: SquareCoords;
    current: SquareCoords;
  }>(initial);
  const [square2, setSquare2] = useState<SquareCoords>(initial.current);
  const [square1Qty, setSquare1Qty] = useState(0);
  const [square2Qty, setSquare2Qty] = useState(0);

  const handleSetCoords1 = (evt: React.MouseEvent) => {
    evt.persist();
    setSquare1(prev => {
      setSquare1Qty(prevS => prevS + 1);
      return {
        previous: prev.current,
        current: { x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY }
      };
    });
  };

  const handleSetCoords2 = (evt: React.MouseEvent) => {
    evt.persist();
    // Multiple call
    setSquare2({ x: 0, y: 0 });
    setSquare2({ x: 0, y: 0 });
    setSquare2({ x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY });
  };

  React.useEffect(() => {
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
          <p>Llamados: {square1Qty}</p>
        </div>
        <div className="column middle center square" onClick={handleSetCoords2}>
          <p className="bold">Mouse position</p>
          <p>Position: {printCoords(square2)}</p>
          <p>Llamados: {square2Qty}</p>
        </div>
      </div>
    </div>
  );
}

export default SquareFunctional;
