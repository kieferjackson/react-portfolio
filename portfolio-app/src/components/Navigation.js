import React from 'react';

function Navigation({ page_view, setPage }) {
    const styles =
    {
        container: 
        {
            textAlign: 'center',
            height: 'fit-content',
            display: 'inline',
            margin: '0 auto'
        },
        nav: 
        { 
            width: '50%', 
            margin: '0 auto' 
        },
        button: 
        { 
            margin: '0 10px',
            fontSize: 'large',
            padding: 15,
            fontWeight: 'bold',
        }
    };

    return (
        <div id="page_nav_container" style={styles.container}>
            <nav style={styles.nav}>
                <button type="button" style={styles.button} onClick={() => setPage('About Me')}>About Me</button>
                <button type="button" style={styles.button} onClick={() => setPage('Portfolio')}>Portfolio</button>
                <button type="button" style={styles.button} onClick={() => setPage('Contact')}>Contact</button>
            </nav>
        </div>
    );
}

export default Navigation;
