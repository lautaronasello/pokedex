import React from 'react';
export default function Pokemon({ pokemon, goToPokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>
          <button onClick={goToPokemon}>{p}</button>
        </div>
      ))}
    </div>
  );
}
