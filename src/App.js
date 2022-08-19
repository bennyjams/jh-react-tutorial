
import React from 'react';
import PropTypes from "prop-types"
import styled from '@emotion/styled';
import { Button, CssBaseline } from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

import './App.css';

import PokemonType from './elements/PokemonType';
import PokemonRow from './elements/PokemonRow';
import PokemonInfo from './elements/PokemonInfo';
import { PokemonFilter } from './elements/PokemonFilter';
import { PokemonTable } from './elements/PokemonTable';

//import PokemonContext from './PokemonContext';

const pokemonReducer = (state ={
  pokemon: [],
  filter: "",
  selectedItem: null,
}, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
}

const store = configureStore({reducer: pokemonReducer});

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  column-gap: 1rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
  background: lightblue;
`;
const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

function App() {
  
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  
  React.useEffect(() => {
    fetch("http://localhost:3000/jh-react-tutorial/pokemon.json")
      .then(resp => resp.json())
      .then(data => 
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        }))
      //.catch(err => console.error(err))
  }, [])
  
  
  
  if(!pokemon){
    return <div>Loading data...</div>
  }
  
  return (
    
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
        
      </Container>
    
  );
}

export default () => <Provider store={store}><App /></Provider>;
