import GhibliService from '~services/GhibliService';

import { useRequest } from './useRequest';

interface Args {
  limit: number;
  withPostFetch?: () => void;
}

export const useMoviesUseRequest = ({ limit, withPostFetch }: Args) => {
  const [data, loading, , fetchMore] = useRequest(
    {
      request: GhibliService.getMovies,
      payload: limit,
      withPostFetch
    },
    [withPostFetch]
  );

  const thereIsMoreData = data?.length ? data.length >= limit : true;

  return { data, loading, fetchMore, thereIsMoreData };
};
