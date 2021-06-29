import React from 'react';

export default function Table({
  name,
  sprites,
  pokemonType,
  height,
  weight,
  game_indices,
  loading,
}) {
  if (loading) {
    return (
      <div className='spinner-border text-warning' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    );
  } else {
    return (
      <div className='container border'>
        <div className='text-center '>
          <h1 className='display-3' key={name}>
            {name}{' '}
          </h1>
          <img
            src={sprites['front_default']}
            alt={name}
            style={{ height: '12rem' }}
          />
        </div>
        <table className='table table-warning border shadow'>
          <tbody>
            <tr>
              <th scope='row'>Tipo</th>
              <td>{pokemonType} </td>
            </tr>
            <tr>
              <th scope='row'>Altura</th>
              <td>
                {''}
                {Math.round(height * 10.5)}cm{' '}
              </td>
            </tr>
            <tr>
              <th scope='row'>Peso</th>
              <td className='divTableCell'>
                {''}
                {Math.round(weight / 9.44)}kg{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
