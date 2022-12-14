
import React, { useContext } from 'react';
import styled from '@emotion/styled';
//import PokemonContext from '../PokemonContext';

import { useSelector, useDispatch } from 'react-redux';

const Input = styled.input`
width: 100%;
font-size: x-large;
padding: 0.2rem;
`;

export function PokemonFilter() {
    
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
  
    return (
        <Input 
            value={filter}
            onChange={(evt) => dispatch({
                type: "SET_FILTER",
                payload: evt.target.value,
            })}
        />
    )
}

