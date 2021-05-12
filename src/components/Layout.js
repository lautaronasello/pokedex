import React from 'react';
import Footer from './Footer.js';
import NavBar from './nav-bar.js';

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
