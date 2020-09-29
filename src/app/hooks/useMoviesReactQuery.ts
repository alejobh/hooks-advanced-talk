import { useQuery } from 'react-query';

import GhibliService from '~services/GhibliService';

interface Args {
  limit: number;
  withPostFetch?: () => void;
}

export const useMoviesReactQuery = ({ limit }: Args) =>
  useQuery(['movies', limit], () => GhibliService.getMovies(limit).then(res => res.data), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    forceFetchOnMount: false
    // This is for playing
    // refetchInterval: 1000
  });
