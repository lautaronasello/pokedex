import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';
import { useHistory } from 'react-router';

function Pokelist() {
  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState('');

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
        setPokemonName(res.data.results[0].name);
        console.log(res.data);
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

  function goToPokemon() {
    history.push({
      pathname: '/dashboard',
    });
    console.log('apretaste gotopokemon ' + pokemonName);
  }

  return (
    <div className='container'>
      <div className='row text-center justify-content-center'>
        <div className='col-6'>
          <Pokemon pokemon={pokemon} goToPokemon={goToPokemon} />
          <Pagination
            goToNextPage={nextPage ? goToNextPage : null}
            goToPrevPage={prevPage ? goToPrevPage : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Pokelist;
