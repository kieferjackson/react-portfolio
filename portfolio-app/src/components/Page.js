import React from 'react';
import Project from './Project';
import { projects } from '../utils';
import avatar from './images/avatar.jpg';

function select_page(page) 
{
    switch(page)
    {
        case 'About Me':
            const HOST_URL = 'tiiny.host';

            const about_me_styles =
            {
                img: 
                {
                    display: 'inline', 
                    borderRadius: '50%', 
                    width: 250
                },
                paragraph: { textAlign: 'justify' }
            }

            return (
                <section key='about_me_section' id='about_me'>
                    <h2>About Me</h2>
                    <img 
                        src={avatar} 
                        alt="Myself (Kiefer Jackson) in front of a beach in Costa Rica during the sunset"
                        style={about_me_styles.img}
                    ></img>
                    <p style={about_me_styles.paragraph}>
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
                </section>
            );
        case 'Portfolio':
            return (
                <section key='portfolio_section' id='portfolio'>
                    <h2>Portfolio</h2>
                    <div className='projects_container' style={ { display: 'flex', flexWrap: 'wrap' } }>
                        {projects.map((project) => <Project key={project.title} {...project} />)}
                    </div>
                </section>
            );
        case 'Contact':
            const GITHUB_USERNAME = 'kieferjackson';
            const PHONE_NUMBER = '(602)-620-6428';
            const EMAIL_ADDRESS = 'kieferleejackson@gmail.com';

            return (
                <section key='contact_section' id='contact'>
                    <h2>Contact</h2>
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
