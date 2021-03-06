import React, { useState, useCallback } from 'react';

import ScreenView from '~components/ScreenView';
import Loading from '~components/Spinner/components/loading';
import GhibliMovie from '~components/GhibliMovie';
import { useMoviesUseRequest } from '~app/hooks/useMoviesUseRequest';
import { scrollToBottom } from '~utils/dom';

import styles from './styles.module.scss';
import { DEFAULT_LIMIT, LIMIT_INCREMENTAL } from './constants';

function UseRequestExample() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const handleGetMore = () => {
    setLimit(prev => prev + LIMIT_INCREMENTAL);
  };

  // Remove useCallback to see infinite loop
  const scrollWhenFetch = useCallback(() => {
    scrollToBottom();
  }, []);

  const { data, loading, thereIsMoreData } = useMoviesUseRequest({
    limit,
    withPostFetch: scrollWhenFetch
  });

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
      {thereIsMoreData && (
        <button type="button" className="button" onClick={handleGetMore}>
          Obtener más
        </button>
      )}
    </ScreenView>
  );
}

export default UseRequestExample;
