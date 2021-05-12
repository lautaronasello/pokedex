import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <ul className='nav justify-content-center mt-2 border-top border-bottom  border-warning'>
        <li className='nav-item'>
          <a className='nav-link' aria-current='page' href='/dashboard'>
            Search Pokémon
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/pokelist'>
            Pokémon List
          </a>
        </li>
      </ul>
    );
  }
}
