import { Button } from '@mui/material';

import PropTypes from "prop-types"

import PokemonType from './PokemonType';

const PokemonRow = ({pokemon, onSelect}) => (
  <tr onClick={() => onSelect(pokemon)}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td><Button 
          variant='contained' color='primary'
          onClick={() => {
            onSelect(pokemon)
          }}>More Info</Button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType) 
}

export default PokemonRow
