import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <Container className='text-center d-flex align-items-center justify-content-center mx-auto mt-5'>
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card
            bg='warning'
            text='white'
            style={{ width: '18rem' }}
            className='mb-2 text-center mt-5 px-0'
          >
            <Card.Header>
              <a
                target='blank'
                href='https://www.linkedin.com/in/lautaronasello/'
                style={{ color: 'white' }}
              >
                Lautaro Nasello
              </a>{' '}
            </Card.Header>
            <Card.Body>
              <Card.Title>Pokémon web React </Card.Title>
              <Card.Text>
                Example from the power of React and axios working whit PokeApi
              </Card.Text>
              <Link
                className='btn btn-light'
                to='/dashboard'
                style={{ color: 'black', textDecoration: 'none' }}
              >
                Go!
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
