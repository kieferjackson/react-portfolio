import React from 'react';

function Navigation({ page_view, setPage }) {
    const DEFAULT_BG_COLOR = '#ffffff00';

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
            // Spacing rules
            margin: '0 10px',
            padding: 15,
            // Font rules
            fontSize: 'large',
            // Visual Rules
            backgroundColor: DEFAULT_BG_COLOR,
            border: '1px solid #2c2c2c',
            borderRadius: 4,
            cursor: 'pointer'
        }
    };

    const styleOnHover = (event) => event.target.style.background = '#9b9b9b1e';
    const destyleOnHover = (event) => event.target.style.background = DEFAULT_BG_COLOR;

    return (
        <div id="page_nav_container" style={styles.container}>
            <nav style={styles.nav}>
                <button 
                    type="button" style={styles.button} 
                    onClick={() => setPage('About Me')}
                    onMouseEnter={styleOnHover}
                    onMouseLeave={destyleOnHover}
                >
                    About Me
                </button>
                <button 
                    type="button" style={styles.button} 
                    onClick={() => setPage('Portfolio')}
                    onMouseEnter={styleOnHover}
                    onMouseLeave={destyleOnHover}
                >
                    Portfolio
                </button>
                <button 
                    type="button" style={styles.button} 
                    onClick={() => setPage('Contact')}
                    onMouseEnter={styleOnHover}
                    onMouseLeave={destyleOnHover}
                >
                    Contact
                </button>
            </nav>
        </div>
    );
}

export default Navigation;
