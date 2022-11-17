
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

/**
 * An array of Project objects with the following properties:
 * @property {string} title - The project's title
 * @property {array} languages_used - The programming languages/technologies used in a project
 * @property {string} website_link - URL for the deployed project
 * @property {string} alt_tag - Alt property for a project's given image
 */
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

export { projects };