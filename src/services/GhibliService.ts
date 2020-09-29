import { createApi } from '~config/api';
import { GhibliMovieI } from '~utils/types';

type ApiError = {
  message: string;
};

const api = createApi(process.env.REACT_APP_GHIBLI_API);

export default {
  getMovies: (limit: number) => api.get<GhibliMovieI[], ApiError>('/films', { ...(limit && { limit }) })
};
