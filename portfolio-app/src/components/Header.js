import React from 'react';
import Navigation from './Navigation';

function Header({ page_view, setPage }) {
  return (
    <header>
      <h1>Kiefer Jackson</h1>
      <Navigation page_view={page_view} setPage={setPage} />
    </header>
  );
}

export default Header;
