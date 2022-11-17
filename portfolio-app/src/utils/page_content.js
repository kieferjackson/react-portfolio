import React from 'react';

/********** About Me Contents **********/
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

/********** Portfolio Data **********/
class Project 
{
    constructor(title, languages_used, website_link, alt_tag)
    {
        this.title = title;
        this.languages_used = languages_used;
        this.website_link = website_link;
        this.alt_tag = alt_tag;
    }
}

const projects = 
[
    // Copoly Calc
    new Project("Copoly-Calc", 
    [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "https://kieferjackson.github.io/copoly-calc/",
    "Copoly-Calc splash page including instructions for minimum user input"),
    // Advocate Hospice Website
    new Project("Advocate Hospice Website", 
    [
        "HTML",
        "CSS",
        "Bootstrap"
    ],
    "https://www.advocatehpc.com/",
    "Advocate Hospice and Palliative Care logo"),
    // Crypto-Info
    new Project("Crypto-Info", 
    [
        "HTML",
        "CSS",
        "Bulma",
        "JavaScript"
    ],
    "https://kieferjackson.github.io/crypto-info/",
    "Logo for Crypto-Info website"),
    // Club Pet
    new Project("Club Pet", 
    [
        "HTML",
        "CSS",
        "Bulma",
        "Express",
        "JavaScript",
        "Sequelize"
    ],
    "https://club-pet.herokuapp.com/",
    "Showing two pets of a user: King (male panda bear) and Cosmos (female dog)")
];

/********** Contact Contents **********/
function contact() 
{
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
}

export { about_me, projects, contact };
