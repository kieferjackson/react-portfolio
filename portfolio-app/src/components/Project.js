import React from 'react';

class ProjectCard 
{
    constructor(title, languages_used, website_link, alt_tag)
    {
        this.title = title;
        this.languages_used = languages_used;
        this.website_link = website_link;
        this.alt_tag = alt_tag;
    }

    createProjectElement() {
        return (
            <div className='project_card' key={this.title}>
                <h3>{this.title}</h3>
                <ul>
                    {this.languages_used.map((language, index) => <li key={index}>{language}</li>)}
                </ul>
                <a href={this.website_link} title={this.website_link}>
                    <img alt={this.alt_tag}></img>
                </a>
            </div>
        )
    }
}

const projects = 
[
    // Copoly Calc
    new ProjectCard("Copoly-Calc", 
    [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "https://kieferjackson.github.io/copoly-calc/",
    "Copoly-Calc splash page including instructions for minimum user input"),
    // Advocate Hospice Website
    new ProjectCard("Advocate Hospice Website", 
    [
        "HTML",
        "CSS",
        "Bootstrap"
    ],
    "https://www.advocatehpc.com/",
    "Advocate Hospice and Palliative Care logo"),
    // Crypto-Info
    new ProjectCard("Crypto-Info", 
    [
        "HTML",
        "CSS",
        "Bulma",
        "JavaScript"
    ],
    "https://kieferjackson.github.io/crypto-info/",
    "Logo for Crypto-Info website"),
    // Club Pet
    new ProjectCard("Club Pet", 
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
]

function Project() {
  return (
    <div className='projects_container'>
      {projects.map((project) => project.createProjectElement())}
    </div>
  );
}

export default Project;
