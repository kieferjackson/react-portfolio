import React from 'react';

function Navigation({ page_view, setPage }) {
  return (
    <nav>
      <ul>
        <li>
            <button type="button" onClick={() => setPage('About Me')}>About Me</button>
        </li>
        <li>
            <button type="button" onClick={() => setPage('Portfolio')}>Portfolio</button>
        </li>
        <li>
            <button type="button" onClick={() => setPage('Contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
