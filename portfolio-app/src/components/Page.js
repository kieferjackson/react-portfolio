import React from 'react';
import Project from './Project';
import { projects } from '../utils';

function select_page(page) 
{
    switch(page)
    {
        case 'About Me':
            const HOST_URL = 'tiiny.host';

        return (
            <p>
                I currently live in Phoenix, Arizona, where I was born and raised. I studied chemistry at 
                Arizona State University and received my BA for General Chemistry there in May 2022. 
                <br /><br />
                My interests include: graphic design (typography, illustration), technology, videogames, and
                cooking.
                <br /><br />
                I began programming in the summer of 2021, when I started the development of a chemistry
                program to aid in copolymer synthesis for my research mentor, written in C++. Later, I 
                transitioned the C++ program to a web application written in JavaScript, which is currently unfinished.
                <br /><br />
                Since then, I designed and deployed the company website for Advocate Hospice and Palliative Care, 
                which I hosted using <a href={`https://${HOST_URL}/`} title={`https://${HOST_URL}/`}>{HOST_URL}</a>.
                In addition, I worked on Crypto-Info, where I was the project coordinator and responsible for 
                fetching API data. As well, I created the backend component of Club Pet using Sequelize (among other 
                Node.js technologies) in addition to large parts of its frontend code using Handlebars.
            </p>
        );
        case 'Portfolio':
            return (
                <div className='projects_container'>
                    {projects.map((project) => <Project {...project} />)}
                </div>
            );
        case 'Contact':
            const GITHUB_USERNAME = 'kieferjackson';
            const PHONE_NUMBER = '(602)-620-6428';
            const EMAIL_ADDRESS = 'kieferleejackson@gmail.com';

            return (
                <section>
                    <h3>Contact</h3>
                    <div className='contact_info'>
                        GitHub: <a href={`https://github.com/${GITHUB_USERNAME}/`}>{GITHUB_USERNAME}</a>
                    </div>
                    <div className='contact_info'>
                        Phone: {PHONE_NUMBER}
                    </div>
                    <div className='contact_info'>
                        Email: <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                    </div>
                </section>
            );
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
