
import React from 'react';
import PropTypes from "prop-types"

import './App.css';

const PokemonRow = ({pokemon, onSelect}) => (
  <tr onClick={() => onSelect(pokemon)}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,  
}

const PokemonInfo = ({name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <tbody>
        {
          Object.keys(base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

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


function App() {
  const [filter, setFilter] = React.useState("");
  const [pokemon, setPokemon] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  
  React.useEffect(() => {
    fetch("http://localhost:3001/jh-react-tutorial/pokemon.json")
      .then(resp => resp.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err))
  }, [])
  
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
        background: "lightblue",
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      
      <div className='searchGrid'>
        <div>
          <input
            value={filter}
            onChange={ (evt) => setFilter(evt.target.value)}
          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.filter((pokemon) => 
                pokemon.name.english.toLowerCase()
                  .includes(filter.toLowerCase())
              )
              .slice(0,50).map((pokemon) => (
                <PokemonRow key={pokemon.id} pokemon={pokemon}
                  onSelect={setSelectedItem} />
              ))}
              
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
      
    </div>
  );
}

export default App;
