import { TodoI } from '~utils/types';

const MILISECONDS = 1000;
export const buildTodo = (text: string): TodoI => ({
  text,
  id: Math.round(Number(new Date()) / MILISECONDS),
  isDone: false
});
