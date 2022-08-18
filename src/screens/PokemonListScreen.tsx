import styled from 'styled-components';

import {PokemonCard} from '../components/PokemonCard';
import {Pokemon} from '../models/Pokemon';
import {usePokemonApi} from '../hooks/usePokemonApi';

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    padding: 1.5rem 0;
  }
`;

const PokemonContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }
`;


export const PokemonListScreen = () => {
  const {pokemons: pokemonList, loadMore} = usePokemonApi();
  const squirtle: Pokemon = {
    name: 'Squirtle',
    index: 7,
    pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
    type: 'water'
  }
  const pokemons: Pokemon[] = [{...squirtle}, {...squirtle}, {...squirtle}, {...squirtle}, {...squirtle}];
  return (
    <PageContainer>
      <PokemonContainer>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard pokemon={pokemon}/>
          );
        })}
      </PokemonContainer>
      <button onClick={() => loadMore()}>Load more</button>
    </PageContainer>
  )
}
