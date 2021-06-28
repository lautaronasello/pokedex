import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ selectedPokemon }) {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  useEffect(() => {
    // if (selectedPokemon) {
    //   const getSelectedPokemon = async () => {
    //     const toArray = [];
    //     try {
    //       const url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    //       const res = await axios.get(url);
    //       toArray.push(res.data);
    //       setPokemonType(res.data.types[0].type.name);
    //       setPokemonData(toArray);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };
    //   getSelectedPokemon();
    //   console.log(pokemonType, ' pokedata, ', pokemonData);
    // }
    console.log(selectedPokemon);
  }, [selectedPokemon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('search-pkm').value = '';
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='container my-5'>
        <div className='row text-center'>
          <div className='col-md-12 col-sm-12 col-lg-12 mx-auto'>
            <form
              className='input-group mx-auto'
              style={{ width: '20rem' }}
              onSubmit={handleSubmit}
            >
              <input
                className='form-control'
                aria-label='Search Your Pokémon'
                aria-describedby='button-addon2'
                id='search-pkm'
                type='text'
                placeholder='Search Your Pokémon'
                onChange={handleChange}
                style={{ boxShadow: 'inset 0 1px 2px #eee' }}
              />
              <button
                className='btn btn-outline-warning text-nowrap mx-1 rounded-0 '
                type='button'
                onClick={handleSubmit}
                id='button-addon2'
              >
                Search
              </button>
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
