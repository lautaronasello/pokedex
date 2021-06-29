import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';
import Table from './components/Table';

function Pokelist() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState();
  const [pokemonType, setPokemonType] = useState('');

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPage]);

  if (loading)
    return (
      <div className='container'>
        <div className='row text-center justify-content-center'>
          <div className='col-6'>
            <div className='spinner-border text-warning mt-5' role='status'>
              <span className='visually-hidden' />
            </div>
          </div>
        </div>
      </div>
    );

  function goToNextPage() {
    setCurrentPage(nextPage);
  }

  function goToPrevPage() {
    setCurrentPage(prevPage);
  }

  var onClick = async (e) => {
    const toArray = [];
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${e.target.textContent}`)
      .then((res) => {
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name);
      });

    setPokemonData(toArray);
  };

  if (pokemonData) {
    pokemonData.map((data) => {
      return <div>{data.name}</div>;
    });
  }
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-md-6 col-sm-12'>
          <Pagination
            goToNextPage={nextPage ? goToNextPage : null}
            goToPrevPage={prevPage ? goToPrevPage : null}
          />
          <Pokemon pokemon={pokemon} onClick={onClick} />
          <Pagination
            goToNextPage={nextPage ? goToNextPage : null}
            goToPrevPage={prevPage ? goToPrevPage : null}
          />
        </div>
        <div
          className='col-md-6 col-sm-12 mt-1 align-items-center justify-content-center d-flex'
          style={{ maxHeight: '100vh' }}
        >
          {pokemonData ? (
            pokemonData.map((data) => {
              return (
                <Table
                  name={data.name}
                  sprites={data.sprites}
                  pokemonType={pokemonType}
                  height={data.height}
                  weight={data.weight}
                  game_indices={data.game_indices}
                />
              );
            })
          ) : (
            <div>Buscá tu pokémon preferido en la lista!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokelist;
