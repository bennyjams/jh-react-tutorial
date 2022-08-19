
import React from 'react';
import PropTypes from "prop-types"
import styled from '@emotion/styled';

import { Button, CssBaseline } from '@mui/material';

import './App.css';

import PokemonType from './elements/PokemonType';
import PokemonRow from './elements/PokemonRow';
import PokemonInfo from './elements/PokemonInfo';
import { PokemonFilter } from './elements/PokemonFilter';
import { PokemonTable } from './elements/PokemonTable';
import PokemonContext from './PokemonContext';


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
  const [filter, setFilter] = React.useState("");
  const [pokemon, setPokemon] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  
  React.useEffect(() => {
    fetch("http://localhost:3000/jh-react-tutorial/pokemon.json")
      .then(resp => resp.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err))
  }, [])
  
  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemon,
        selectedItem,
        setFilter,
        setPokemon,
        setSelectedItem,
      }}
    >
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
    </PokemonContext.Provider>
  );
}

export default App;
