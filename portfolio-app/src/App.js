import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
// Importing style
import './index.css';

function App() {
	const [page_view, setPage] = useState('About Me');

	useEffect(() => { document.title = `Kiefer Jackson's Portfolio` }, [])

	return (
		<div>
			<Header page_view={page_view} setPage={setPage} />
			<main>
				<Page page_view={page_view} setPage={setPage} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
