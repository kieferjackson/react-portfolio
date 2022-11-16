import React from 'react';
import Project from './Project';

function select_page(page) 
{
    switch(page)
    {
        case 'About Me':
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
                    transitioned the C++ program to a web application written in JavaScript, which is still a
                    work-in-progress project in active development.
                    <br /><br />
                    Since then, I designed and deployed the company website for Advocate Hospice and Palliative Care, 
                    which I hosted using <a href="https://tiiny.host/" title="https://tiiny.host/">tiiny.host</a>.
                    In addition, I worked on Crypto-Info, where I was the project coordinator and responsible for 
                    fetching API data. As well, I created the backend component of Club Pet using Sequelize (among other 
                    Node.js technologies) in addition to large parts of its frontend code using Handlebars.
                    I was also a key member for the development of <em>[Fictional Database Project]</em>, where I
                    implemented a bespoke query selection tool using Minecraft redstone.
                </p>
            );
        case 'Portfolio':
            return <Project />;
        case 'Contact':
            return (
                <section>
                    <h3>Contact</h3>
                    <div className='contact_info'>
                        GitHub: <a href="https://github.com/kieferjackson/">kieferjackson</a>
                    </div>
                    <div className='contact_info'>
                        Phone: (602)-620-6428
                    </div>
                    <div className='contact_info'>
                        Email: <a href="mailto:kieferleejackson@gmail.com">kieferleejackson@gmail.com</a>
                    </div>
                </section>
            )
        default:
            return <div>Nothing here...</div>
    }
}

export default function Page({ page_view }) {
    return (
        <div>
            {select_page(page_view)}
        </div>
    )
}
