import { Todo } from '~utils/types';

const MILISECONDS = 1000;
export const buildTodo = (text: string): Todo => ({
  text,
  id: Math.round(Number(new Date()) / MILISECONDS),
  isDone: false
});
