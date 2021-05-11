import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Nav
        className='justify-content-center mt-3'
        variant='pills'
        defaultActiveKey='/home'
      >
        <Nav.Item>
          <Nav.Link href='/search'>Search Pokémon</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/pokemons'>Pokémons List</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
