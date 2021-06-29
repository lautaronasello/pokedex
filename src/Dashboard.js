import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import axios from 'axios';
import Pokelist from './Pokelist';

function Dashboard({ selectedPokemon }) {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');
  const [loading, setLoading] = useState(true);
  const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

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
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
    if (pokemonData) {
      <Pokelist
        pokemonData={pokemonData}
        pokemonType={pokemonType}
        loading={loading}
      />;
    }
  };

  useEffect(() => {
    console.log(selectedPokemon);
  }, [selectedPokemon]);

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
          <Table
            key={data.name}
            loading={loading}
            name={data.name}
            height={data.height}
            weight={data.weight}
            sprites={data.sprites}
            pokemonType={pokemonType}
            game_indices={data.game_indices}
          />
        );
      })}
    </>
  );
}

export default Dashboard;
