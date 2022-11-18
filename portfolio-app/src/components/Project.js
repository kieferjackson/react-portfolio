import React, { useState } from 'react';

function Project({ title, languages_used, website_link, alt_tag, img }) {
    // Setting state for hovering over elements
    const [isHovered, setHovered] = useState(false);

    // Handling functions for element hovering
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const styles =
    {
        project_card:
        {
            // Responsive rules
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1 0 30%',
            // Sizing rules
            width: 'fit-content',
            margin: '1%',
            paddingBottom: 10,
            // Visual rules
            borderRadius: 15,
            background: 'linear-gradient(0deg, rgb(250, 250, 250) 0%, #fff)',
            boxShadow: 'inset 0px 3px 6px 0px rgba(131, 131, 131, 0.5)'
        },
        title: { borderBottom: '1px solid var(--dark-gray)' },
        languages_used: { padding: 10 }
    };

    const img_style =
    {
        width: 250,
        borderRadius: 5,
        filter: isHovered ? 'blur(0px)' : 'blur(5px)',
        boxShadow: isHovered ? 'var(--standard-box-shadow)' : ''
    }

    return (
        <div className='project_card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles.project_card} key={title}>
            <h3 style={styles.title}>{title}</h3>
            <ul style={styles.languages_used}>
                {languages_used.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
            <a href={website_link} title={website_link}>
                <img 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="project_preview" 
                    style={img_style} 
                    src={img} 
                    alt={alt_tag}
                ></img>
            </a>
        </div>
    );
}

export default Project;
