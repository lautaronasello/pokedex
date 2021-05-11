import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='row text-center'>
          <div className='col-md-12 col-sm-12 col-lg-12 mx-auto'>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type='text'
                  placeholder='Search Your Pokémon'
                  onChange={handleChange}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      {pokemonData.map((data) => {
        return (
          <div className='container'>
            <img src='' alt='' />
            <div className='divTable'>
              <div className='divTableBody'></div>
              <div className='divTableRow'>
                <div className='divTableCell'>Type</div>
                <div className='divTableCell' key={pokemonType}>
                  {pokemonType}{' '}
                </div>
              </div>
              <div className='divTableBody'></div>
              <div className='divTableRow'>
                <div className='divTableCell'>Height</div>
                <div className='divTableCell' key={data.height}>
                  {''}
                  {Math.round(data.height * 3.9)}"{' '}
                </div>
              </div>
              <div className='divTableBody'></div>
              <div className='divTableRow'>
                <div className='divTableCell'>Weight</div>
                <div className='divTableCell' key={data.weight}>
                  {''}
                  {Math.round(data.weight / 4.3)}lbs{' '}
                </div>
              </div>
              <div className='divTableBody'></div>
              <div className='divTableRow'>
                <div className='divTableCell'>Number of Battles</div>
                <div className='divTableCell' key={data.name}>
                  {data.game_indices.length}{' '}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
