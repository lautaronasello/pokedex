import React from 'react';

export default function Pokemon({ pokemon, onClick }) {
  return (
    <div>
      <ul className=' list-group mt-3 text-center'>
        {pokemon.map((p, index) => (
          <li
            onClick={onClick}
            key={p}
            className='list-group-item list-group-item-warning rounded mt-1 border shadow-sm px-0 py-1 hand'
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
