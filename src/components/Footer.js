import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='container position-relative  text-center'>
        <div className='row '>
          <div className='col-lg-12 col-sm-12 col-md-12 text-center position-absolute bottom-0 start-50 translate-middle-x my-2'>
            <span className='text-muted'>
              <a
                href='http://linkedin.com/in/lautaronasello/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                Lautaro Nasello - 2021
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
