import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('search-pkm').value = '';
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
      <div className='container my-5'>
        <div className='row text-center'>
          <div className='col-md-12 col-sm-12 col-lg-12 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='input-group mx-auto' style={{ width: '20rem' }}>
                <input
                  className='form-control'
                  id='search-pkm'
                  type='text'
                  placeholder='Search Your Pokémon'
                  onChange={handleChange}
                  style={{ boxShadow: 'inset 0 1px 2px #eee' }}
                />
                <button
                  className='btn btn-outline-secondary '
                  type='button'
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {pokemonData.map((data) => {
        return (
          <div className='container border'>
            <div className='text-center '>
              <h1 className='display-3' key={data.name}>
                {data.name}{' '}
              </h1>
              <img
                src={data.sprites['front_default']}
                alt={data.name}
                key={data.id}
                style={{ height: '12rem' }}
              />
            </div>
            <table className='table table-warning border shadow'>
              <tbody>
                <tr>
                  <th scope='row'>Type</th>
                  <td key={pokemonType}>{pokemonType} </td>
                </tr>
                <tr>
                  <th scope='row'>Height</th>
                  <td key={data.height}>
                    {''}
                    {Math.round(data.height * 3.9)}"{' '}
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Weight</th>
                  <td className='divTableCell' key={data.weight}>
                    {''}
                    {Math.round(data.weight / 4.3)}lbs{' '}
                  </td>
                </tr>
                <tr>
                  <th scope='row'>Number of Battles</th>
                  <td className='divTableCell' key={data.game_indices.length}>
                    {data.game_indices.length}{' '}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

export default Dashboard;
