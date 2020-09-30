import React from 'react';

import { GhibliMovieI } from '~utils/types';

import { ReactComponent as Star } from './assets/star.svg';
import styles from './styles.module.scss';

interface Props {
  movie: GhibliMovieI;
}

function GhibliMovie({ movie }: Props) {
  return (
    <div className={styles.container}>
      <div className="row middle space-between m-bottom-2">
        <h2>
          {movie.title}
          <span className={styles.releaseDate}>{movie.release_date}</span>
        </h2>
        <span className={styles.score}>
          <Star className={styles.star} /> {movie.rt_score}
        </span>
      </div>
      <p className={`${styles.description} m-bottom-2`}>{movie.description}</p>
      <p className={styles.producer}>
        Productor: <span className={styles.producerName}>{movie.producer}</span>
      </p>
    </div>
  );
}

export default GhibliMovie;
