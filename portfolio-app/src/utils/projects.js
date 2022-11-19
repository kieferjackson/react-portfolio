import placeholder from './assets/placeholder.png';
// Importing local image data
import copolycalc from './assets/copoly-calc-preview.PNG';
import ahpc from './assets/ahpc_logo.png';
import cryptoinfo from './assets/crypto-info-preview.png';
import clubpet from './assets/club-pet-preview.png';

class Project 
{
    constructor(title, repo_name, languages_used, website_link, alt_tag, img = placeholder)
    {
        this.title = title;
        this.repo_name = repo_name;
        this.languages_used = languages_used;
        this.website_link = website_link;
        this.alt_tag = alt_tag;
        this.img = img;
    }
}

/**
 * An array of Project objects with the following properties:
 * @property {string} title - The project's title
 * @property {string} repo_name - The project's GitHub repository name
 * @property {array} languages_used - The programming languages/technologies used in a project
 * @property {string} website_link - URL for the deployed project
 * @property {string} alt_tag - Alt property for a project's given image
 * @property {image} img - Given image to represent a project
 */
const projects = 
[
    // Copoly Calc
    new Project("Copoly-Calc", 'copoly-calc',
    [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "https://kieferjackson.github.io/copoly-calc/",
    "Copoly-Calc splash page including instructions for minimum user input",
    copolycalc),
    // Advocate Hospice Website
    new Project("Advocate Hospice Website", 'ahpc',
    [
        "HTML",
        "CSS",
        "Bootstrap"
    ],
    "https://www.advocatehpc.com/",
    "Advocate Hospice and Palliative Care logo",
    ahpc),
    // Crypto-Info
    new Project("Crypto-Info", 'crypto-info',
    [
        "HTML",
        "CSS",
        "Bulma",
        "JavaScript"
    ],
    "https://kieferjackson.github.io/crypto-info/",
    "Logo for Crypto-Info website",
    cryptoinfo),
    // Club Pet
    new Project("Club Pet", 'club-pet',
    [
        "HTML",
        "CSS",
        "Bulma",
        "Express",
        "JavaScript",
        "Sequelize"
    ],
    "https://club-pet.herokuapp.com/",
    "Showing two pets of a user: King (male panda bear) and Cosmos (female dog)",
    clubpet)
];

export { projects };