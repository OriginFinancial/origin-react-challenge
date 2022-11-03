import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from './assets/logo.icon.svg';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { PokemonCard } from './components/PokemonCard';
import { usePokemonApi } from './hooks/usePokemonApi';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1.5rem;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1.5rem;
`;

const ListWrapper = styled.div`
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
  const {pokemon: pokemonList, loadMore} = usePokemonApi();

  return (
    <div>
      <Header>
        <Wrapper>
          <Logo/>
        </Wrapper>
      </Header>
      <Container>
        <ListWrapper>
          {pokemonList.map((pokemon, index) => {
            return (
              <PokemonCard key={index} pokemon={pokemon}/>
            );
          })}
        </ListWrapper>
        <ButtonContainer>
          <Button onClick={() => loadMore()}>Load more</Button>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default App;
