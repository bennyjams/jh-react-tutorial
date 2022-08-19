
import React, { useContext } from 'react';
//import PokemonContext from "../PokemonContext"
import PokemonRow from "./PokemonRow"

import { useSelector, useDispatch } from 'react-redux';

export function PokemonTable() {
    
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const filter = useSelector(state => state.filter)
  
  
    return (
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
            <PokemonRow 
                key={pokemon.id} 
                pokemon={pokemon}
                onSelect={(pokemon) => {
                    dispatch({
                        type: 'SET_SELECTED_POKEMON',
                        payload: pokemon,
                    })
                }} />
        ))}
        
        </tbody>
    </table>)
}



