import React, { useState, useEffect } from 'react';

import GhibliService, { MovieRating, UserProfile } from '~services/GhibliService';
import ScreenView from '~components/ScreenView';

const INTERVAL = 1000;
// eslint-disable-next-line no-magic-numbers
const MAX_RATING = Math.floor(3 + Math.random() * 6);

const DEFAULT_USER: UserProfile = {
  name: 'Pablo',
  movieHistory: Array.from({ length: 10000000 }, () => ({
    title: 'title',
    rating: Math.floor(Math.random() * MAX_RATING)
  }))
};

function getAverageRating(movies: MovieRating[]) {
  console.log('Calculate average');
  return (
    movies.map(movie => movie.rating).reduce((prev, current) => prev + current, 0) / movies.length
  ).toFixed(2);
}

function UseCallbackMemo({ user = DEFAULT_USER }: { user: UserProfile }) {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTimer(prevTimer => prevTimer + 1), INTERVAL);
    return () => clearInterval(interval);
  });

  const averageRating = () => getAverageRating(user.movieHistory);
  const saveProfile = () => GhibliService.saveProfile(user);

  // TODO: Implement save on unmount

  return (
    <ScreenView title="useCallback & useMemo example">
      <h2 className="m-bottom-2">
        {user.name} {timer}
      </h2>
      <p className="m-bottom-2">Películas vistas: {user.movieHistory.length}</p>
      <p className="m-bottom-2">Promedio de puntajes: {averageRating()}</p>
      <button type="button" className="button" onClick={saveProfile}>
        Guardar Perfil
      </button>
    </ScreenView>
  );
}

export default UseCallbackMemo;
