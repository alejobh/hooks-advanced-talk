import React from 'react';
import { useQueryCache } from 'react-query';

import { GhibliMovieI } from '~utils/types';
import GhibliMovie from '~components/GhibliMovie';

function MoviesCache({ limit }: { limit: number }) {
  const cache = useQueryCache();

  const movies: GhibliMovieI[] | undefined = cache.getQueryData(['movies', limit]);

  return (
    <div className="column m-top-10">
      <h2>Cache</h2>
      <>{!!movies?.length && movies.map(movie => <GhibliMovie key={movie.id} movie={movie} />)}</>
    </div>
  );
}

export default MoviesCache;
