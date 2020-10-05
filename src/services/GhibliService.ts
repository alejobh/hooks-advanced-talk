import { createApi } from '~config/api';
import { GhibliMovieI } from '~utils/types';

type ApiError = {
  message: string;
};

export interface MovieRating {
  title: string;
  rating: number;
}

export interface UserProfile {
  name: string;
  movieHistory: MovieRating[];
}

const api = createApi(process.env.REACT_APP_GHIBLI_API);

export default {
  getMovies: (limit: number) => api.get<GhibliMovieI[], ApiError>('/films', { ...(limit && { limit }) }),
  saveProfile: (user: UserProfile) => Promise.resolve({ ok: true, data: user })
};
