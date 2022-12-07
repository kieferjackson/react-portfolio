import React, { useState } from 'react';

function Project({ title, repo_name, languages_used, website_link, alt_tag, img }) {
    // Setting state for hovering over projects
    const [isHovered, setHovered] = useState(false);

    // Handling functions for project hovering
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
            boxShadow: isHovered 
                ? 'inset 0px 3px 6px 0px rgba(131, 131, 131, 0.5)'
                : 'inset 0px 1px 5px 0px rgba(131, 131, 131, 0.4)'
        },
        title: { borderBottom: '1px solid #2c2c2c' },
        languages_used: 
        { 
            padding: 10, 
            margin: 'auto auto 0px' 
        },
        img:
        {
            width: 250,
            borderRadius: 5,
            filter: isHovered ? 'blur(0px)' : 'blur(5px)',
            boxShadow: isHovered ? '0px 4px 8px 0px #85858567' : ''
        }
    };

    return (
        <div className='project_card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles.project_card} key={title}>
            <h3 style={styles.title}>{title}</h3>
            <a href={website_link} title={website_link}>
                <img 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="project_preview" 
                    style={styles.img} 
                    src={img} 
                    alt={alt_tag}
                ></img>
            </a>
            <aside style={styles.languages_used}>
                {languages_used.map((language, index) => index === languages_used.length -1 ? `${language}` : `${language} / `)}
            </aside>
            <a 
                href={repo_name} 
                title={repo_name}
            >
                GitHub Repository
            </a>
        </div>
    );
}

export default Project;
