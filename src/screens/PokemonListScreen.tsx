import styled from 'styled-components';

import {PokemonCard} from '../components/PokemonCard';
import {usePokemonApi} from '../hooks/usePokemonApi';

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1.5rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0px 10px 51px -5px rgb(183 189 193 / 30%);
  border: none;
  border-radius: 12px;

  :hover {
    background-color: #eee;
  }
`


export const PokemonListScreen = () => {
  const {pokemons: pokemonList, loadMore} = usePokemonApi();

  return (
    <PageContainer>
      <PokemonContainer>
        {pokemonList.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.index} pokemon={pokemon}/>
          );
        })}
      </PokemonContainer>
      <ButtonContainer>
      <Button onClick={() => loadMore()}>Load more</Button>
      </ButtonContainer>
    </PageContainer>
  )
}
