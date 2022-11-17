import React from 'react';

function Project({ title, languages_used, website_link, alt_tag }) {
    return (
        <div className='project_card' key={title}>
            <h3>{title}</h3>
            <ul>
                {languages_used.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
            <a href={website_link} title={website_link}>
                <img alt={alt_tag}></img>
            </a>
        </div>
    );
}

export default Project;
