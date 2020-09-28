import React, { useState } from 'react';

import Loading from '~components/Spinner/components/loading';
import GhibliMovie from '~components/GhibliMovie';
import { useMoviesReactQuery } from '~app/hooks/useMoviesReactQuery';
import { GhibliMovieI } from '~utils/types';

import { DEFAULT_LIMIT, LIMIT_INCREMENTAL } from './constants';
import styles from './styles.module.scss';
import MoviesCache from './components/MoviesCache';

function Movies() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const { data, isError, isLoading } = useMoviesReactQuery({ limit });

  const movies = data as GhibliMovieI[];

  const handleGetMore = () => {
    setLimit(prev => prev + LIMIT_INCREMENTAL);
  };

  const thereIsMoreData = movies?.length ? movies.length >= limit : true;

  return (
    <div className={`column center ${styles.container}`}>
      {isLoading && <Loading />}
      {data && !isLoading && !isError && !!movies?.length && (
        <div className="column middle center m-bottom-6">
          {movies.map((movie: GhibliMovieI) => (
            <GhibliMovie key={movie.id} movie={movie} />
          ))}
          {thereIsMoreData && (
            <button type="button" className={styles.fetchButton} onClick={handleGetMore}>
              Obtener más
            </button>
          )}
        </div>
      )}
      <MoviesCache limit={limit} />
    </div>
  );
}

export default Movies;
