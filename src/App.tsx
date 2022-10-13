import React from 'react';
import styled from 'styled-components';

import './App.css';
import { usePokemonApi } from './hooks/usePokemonApi';
import { Header } from './components/Header';
import { Button } from './components/Button';
import {PokemonCard} from './components/PokemonCard';
import { ReactComponent as Logo } from './assets/logo.icon.svg';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1.5rem;
`;

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1.5rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`

const App = () => {
  const {pokemons: pokemonList, loadMore} = usePokemonApi();

  return (
    <div>
      <Header>
        <Container>
          <Logo/>
        </Container>
      </Header>
      <PageContainer>
        <PokemonContainer>
          {pokemonList.map((pokemon, index) => {
            return (
              <PokemonCard key={index} pokemon={pokemon}/>
            );
          })}
        </PokemonContainer>
        <ButtonContainer>
          <Button onClick={() => loadMore()}>Load more</Button>
        </ButtonContainer>
      </PageContainer>
    </div>
  );
}

export default App;
