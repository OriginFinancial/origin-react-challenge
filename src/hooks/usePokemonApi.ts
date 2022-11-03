import React, { useMemo } from 'react';

import { api } from '../api/service';
import { Pokemon, PokemonApiNode } from '../models/Pokemon';

export const usePokemonApi = () => {
  const [pokemon, setPokemon] = React.useState<Pokemon[]>([]);

  const mapPokemon = (data: any) => {
    const newPokemon: Pokemon = {
      name: data.name,
      index: data.id,
      pictureUrl: data.sprites.other.dream_world.front_default,
      type: data.types[0].type.name
    }
    setPokemon(current => [...current, newPokemon])
  }

  const getPokemonDetails = useMemo(() => (pokemonList: PokemonApiNode[]) => {
    pokemonList.forEach(pokemonNode => {
      api
      .get(pokemonNode.url)
      .then((res) => {
        mapPokemon(res.data);
      })
      .catch((err) => console.warn(err));
    })
  }, [])

  const loadMore = () => {
    api
      .get(`pokemon?limit=9&offset=${pokemon.length + 1}`)
      .then((res) => {
        getPokemonDetails(res.data.results);
      })
      .catch((err) => console.warn(err));
  }

  React.useEffect(() => {
    api
      .get('pokemon?limit=9')
      .then((res) => {
        getPokemonDetails(res.data.results);
      })
      .catch((err) => console.warn(err));
  }, [getPokemonDetails])

  return {
    pokemon,
    loadMore
  }
}
