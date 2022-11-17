import React from 'react';
import Project from './Project';
import { about_me, projects, contact } from '../utils/page_content';

function select_page(page) 
{
    switch(page)
    {
        case 'About Me':
            return about_me();
        case 'Portfolio':
            return (
                <div className='projects_container'>
                    {projects.map((project) => <Project {...project} />)}
                </div>
            );
        case 'Contact':
            return contact();
        default:
            return <div>Nothing here...</div>
    }
}

export default function Page({ page_view }) {
    return (
        <div key={page_view}>
            {select_page(page_view)}
        </div>
    );
}
