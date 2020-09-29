import { SquareCoords } from '~utils/types';

export const initial = { previous: { x: 0, y: 0 }, current: { x: 0, y: 0 } };

export const printCoords = (square: SquareCoords) => `x: ${square.x} -- y: ${square.y}`;
