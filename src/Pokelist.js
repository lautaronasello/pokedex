import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';

function Pokelist() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);

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

  if (loading) return 'Loading...';

  function goToNextPage() {
    setCurrentPage(nextPage);
  }

  function goToPrevPage() {
    setCurrentPage(prevPage);
  }

  return (
    <>
      <Pokemon pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
    </>
  );
}

export default Pokelist;
