import React, { useMemo } from 'react';
import {api} from '../api/service';
import { Pokemon, PokemonApiNode } from '../models/Pokemon';

export const usePokemonApi = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  const mapPokemon = (data: any) => {
    const newPokemon: Pokemon = {
      name: data.name,
      index: data.id,
      pictureUrl: data.sprites.other.dream_world.front_default,
      type: data.types[0].type.name
    }
    setPokemons(current => [...current, newPokemon])
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
      .get(`pokemon?limit=9&offset=${pokemons.length + 1}`)
      .then((res) => {
        getPokemonDetails(res.data.results);
      })
      .catch((err) => console.warn(err));
  }

  React.useEffect(() => {
    console.log(`bbb`)
    api
      .get('pokemon?limit=9')
      .then((res) => {
        getPokemonDetails(res.data.results);
      })
      .catch((err) => console.warn(err));
  }, [getPokemonDetails])

  return {
    pokemons,
    loadMore
  }
}
