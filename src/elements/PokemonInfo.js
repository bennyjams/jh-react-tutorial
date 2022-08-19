
import React, {useContext} from 'react';
import PropTypes from "prop-types"
import PokemonContext from '../PokemonContext';
import { useSelector, useDispatch } from 'react-redux';

const PokemonInfo = () => {
  
  const selectedItem = useSelector(state => state.selectedItem)
        
  return selectedItem ? (
  <div>
    <h1>{selectedItem.name.english}</h1>
    <table>
      <tbody>
        {
          Object.keys(selectedItem.base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  ) : null;
}

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
  
}

export default PokemonInfo
