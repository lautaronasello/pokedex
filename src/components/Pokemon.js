import React, { useState } from 'react';
import Dashboard from '../Dashboard';

export default function Pokemon({ pokemon }) {
  const [selectedPokemon, setSelectedPokemon] = useState('');

  let choosePokemon = (e) => {
    setSelectedPokemon(e.target.textContent);
    setSelectedPokemon && <Dashboard selectedPokemon={selectedPokemon} />;
    window.location = '/dashboard';
  };

  console.log(selectedPokemon);
  return (
    <div>
      <ul className=' list-group mt-3'>
        {pokemon.map((p) => (
          <li
            onClick={choosePokemon}
            key={p}
            className='list-group-item list-group-item-warning rounded mt-1 border shadow-sm px-0 py-1'
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
