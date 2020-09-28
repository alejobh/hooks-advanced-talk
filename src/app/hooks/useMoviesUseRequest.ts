import { useQuery } from 'react-query';

import api from '../config/api';
import { IPokemon } from '../interfaces/pokemons';

interface Props {
  searchQuery?: string;
}

function usePokemons({ searchQuery = '' }: Props) {
  return useQuery(
    ['pokemon', searchQuery],
    () => api.get<IPokemon>(`/pokemon/${searchQuery}`).then(res => res.data),
    {
      enabled: searchQuery
    }
  );
}

export default usePokemons;
