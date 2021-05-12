import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Nav
        className='justify-content-center mt-3 border border-warning'
        variant='pills'
        defaultActiveKey='/home'
      >
        <Nav.Item>
          <Nav.Link href='/dashboard'>Search Pokémon</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/pokelist'>Pokémons List</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
