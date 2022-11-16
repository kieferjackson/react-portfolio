import React, { useState } from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const [page_view, setPage] = useState('About Me');

  return (
    <div>
      <Header page_view={page_view} setPage={setPage} />
      <Page page_view={page_view} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default App;
