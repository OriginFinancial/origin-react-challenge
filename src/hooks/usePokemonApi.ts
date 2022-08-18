import React from 'react';
import {api} from '../api/service';

export const usePokemonApi = () => {
  const [pokemons, setPokemons] = React.useState<[]>([]);

  const loadMore = () => {
    api
      .get(`pokemon?limit=9&offset=${pokemons.length + 1}`)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => console.warn(err));
  }

  React.useEffect(() => {
    api
      .get('pokemon?limit=9')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => console.warn(err));
  },[])

  return {
    pokemons,
    loadMore
  }
}
