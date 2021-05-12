import React from 'react';
export default function Pokemon({ pokemon, pokemonName }) {
  return (
    <div>
      <ul className=' list-group mt-3'>
        {pokemon.map((p) => (
          <li
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
