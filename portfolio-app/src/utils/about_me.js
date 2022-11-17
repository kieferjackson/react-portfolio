import React from 'react';

/**
 * @returns JSX for any personal information, enclosed in a paragraph tag.
 */
function about_me ()
{
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
}

export { about_me };