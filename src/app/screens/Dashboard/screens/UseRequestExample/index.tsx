import React, { useState, useEffect } from 'react';

import ScreenView from '~components/ScreenView';
import { useRequest } from '~app/hooks/useRequest';
import GhibliService from '~services/GhibliService';
import Loading from '~components/Spinner/components/loading';
import GhibliMovie from '~components/GhibliMovie';

import styles from './styles.module.scss';
import { DEFAULT_LIMIT, LIMIT_INCREMENTAL } from './constants';

function UseRequestExample() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const [data, loading, , requestMore] = useRequest(
    {
      request: GhibliService.getMovies,
      payload: limit
    },
    []
  );

  const handleGetMore = () => {
    setLimit(prev => prev + LIMIT_INCREMENTAL);
  };

  const fetchedAllMovies = data?.length ? limit > data.length : false;

  useEffect(() => {
    requestMore(limit);
  }, [limit, requestMore]);

  return (
    <ScreenView title="useRequest example" smallScreen={false}>
      {loading && <Loading />}
      {data && !loading && !!data?.length && (
        <div className={`column middle center m-bottom-6 ${styles.container}`}>
          {data.map(movie => (
            <GhibliMovie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      {!fetchedAllMovies && (
        <button type="button" className={styles.fetchButton} onClick={handleGetMore}>
          Obtener más
        </button>
      )}
    </ScreenView>
  );
}

export default UseRequestExample;
