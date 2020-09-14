import React, { Component } from 'react';

import { SquareCoords } from '~utils/types';

import { initial, printCoords } from '../../utils';

interface State {
  square1: { previous: SquareCoords; current: SquareCoords };
  square2: SquareCoords;
  square1Qty: number;
  square2Qty: number;
}

class SquareClassComponent extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      square1: initial,
      square2: initial.current,
      square1Qty: 0,
      square2Qty: 0
    };
  }

  handleSetSquare1 = (evt: React.MouseEvent) => {
    evt.persist();
    this.setState(prev => ({
      square1Qty: prev.square1Qty + 1,
      square1: {
        previous: prev.square1.current,
        current: { x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY }
      }
    }));
  };

  handleSetSquare2 = (evt: React.MouseEvent) => {
    evt.persist();
    // Multiple calls
    this.setState({ square2: { x: 0, y: 0 } });
    this.setState({ square2: { x: 0, y: 0 } });
    this.setState({
      square2: { x: evt.nativeEvent.offsetX, y: evt.nativeEvent.offsetY }
    });
  };

  componentDidUpdate(prevProps: object, prevState: State) {
    const { square2: prevSquare2, square2Qty } = prevState;
    const { square2 } = this.state;
    if (prevSquare2.x !== square2.x || prevSquare2.y !== square2.y) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ square2Qty: square2Qty + 1 });
    }
  }

  render() {
    const { square1, square2, square1Qty, square2Qty } = this.state;
    return (
      <div className="column full-width center">
        <h2 className="m-bottom-4">Class Component</h2>
        <div className="row">
          <div className="column middle center square yellow m-right-4" onClick={this.handleSetSquare1}>
            <p className="bold">Mouse position</p>
            <p>Previous: {printCoords(square1.previous)}</p>
            <p>Current: {printCoords(square1.current)}</p>
            <p>Llamados: {square1Qty}</p>
          </div>
          <div className="column middle center square yellow" onClick={this.handleSetSquare2}>
            <p className="bold">Mouse position</p>
            <p>Position: {printCoords(square2)}</p>
            <p>Llamados: {square2Qty}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SquareClassComponent;
