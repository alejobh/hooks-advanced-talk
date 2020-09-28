import { ApiResponse, ApiErrorResponse } from 'apisauce';

import { createApi } from '~config/api';
import { GhibliMovieI } from '~utils/types';

type ApiError = {
  message: string;
};

const api = createApi(process.env.REACT_APP_GHIBLI_API);

export default {
  getMovies: (limit: number): Promise<ApiResponse<Array<GhibliMovieI>, ApiErrorResponse<ApiError>>> =>
    api.get('/films', { ...(limit && { limit }) })
};
