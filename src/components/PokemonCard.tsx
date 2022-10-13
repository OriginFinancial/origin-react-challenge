import React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../models/Pokemon';

const CardContainer = styled.div`
  box-shadow: 0px 10px 51px -5px rgb(183 189 193 / 30%);
  border-radius: 12px;
  cursor: pointer;
  padding: 2rem;
`

const CardImage = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`

const PokemonImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const PokemonName = styled.div`
  span {
    font-weight: bold;
    text-transform: capitalize;
  }
`

const PokemonType = styled.div`
  font-size: 0.5rem;
  text-transform: uppercase;
  background-color: #eee;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const {name, index, pictureUrl, type} = pokemon;

  return (<CardContainer>
    <CardImage>
      <PokemonImage src={pictureUrl} alt={pokemon.name}/>
    </CardImage>
    <CardInfo>
        <PokemonName>#{index} <span>{name}</span></PokemonName>
        <PokemonType>{type}</PokemonType>
    </CardInfo>
  </CardContainer>)
}
