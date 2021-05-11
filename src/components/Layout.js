import React from 'react';
import NavBar from './nav-bar.js';

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
