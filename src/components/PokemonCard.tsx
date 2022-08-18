import React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../models/Pokemon';

const CardContainer = styled.div`
  position: relative;
  bottom: 0;
  max-width: 100%;
  height: 30.4rem;
  background-color: #ffffff;
  border: 0;
  box-shadow: 0px 10px 51px -5px rgb(183 189 193 / 30%);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  animation: fadeIn 0.3s forwards;
`

const CardImage = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.4rem auto;
  z-index: 2;
`

const CardInfo = styled.div`
  display: flex;
  padding: 0 2.8rem;
  align-items: flex-end;
  justify-content: space-between;
`

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const {name, index, pictureUrl, type} = pokemon;

  return (<CardContainer>
    <CardImage>
      <img src={pictureUrl} alt="pokemon image"/>
    </CardImage>
    <CardInfo>
      <div>
        <span>#{index}</span>
        <strong>{name}</strong>
      </div>
      <div>
        <p>{type}</p>
      </div>
    </CardInfo>
  </CardContainer>)
}
