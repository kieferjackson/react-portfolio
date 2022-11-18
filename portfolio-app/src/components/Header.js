import React from 'react';
import Navigation from './Navigation';

const styles =
{
    header: 
    {
        backgroundColor: '#2c2c2c1e',
        padding: 20,
        boxShadow: '0px 4px 8px 0px #85858567'
    },
    h1: 
    { 
        margin: 0,
        textAlign: 'center',
        padding: 20
    },
}

function Header({ page_view, setPage }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Kiefer Jackson</h1>
      <Navigation page_view={page_view} setPage={setPage} />
    </header>
  );
}

export default Header;
