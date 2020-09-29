export type Nullable<T> = T | null;

export type SquareCoords = { x: number; y: number };

export interface GhibliMovieI {
  id: string;
  title: string;
  description: string;
  producer: string;
  release_date: string;
  rt_score: string;
}
