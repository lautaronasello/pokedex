import React from 'react';

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className='my-3'>
      {goToPrevPage && (
        <button className='btn btn-warning btn-sm mx-1 ' onClick={goToPrevPage}>
          Prev
        </button>
      )}
      {goToNextPage && (
        <button className='btn btn-warning btn-sm mx-1 ' onClick={goToNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
