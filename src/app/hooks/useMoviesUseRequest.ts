import GhibliService from '~services/GhibliService';

import { useRequest } from './useRequest';

export const useMoviesUseRequest = ({
  limit,
  withPostFetch
}: {
  limit: number;
  withPostFetch?: () => void;
}) => {
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
