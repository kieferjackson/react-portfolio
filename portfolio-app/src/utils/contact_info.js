import React from 'react';

/**
 * @returns JSX for contact info including: GitHub, phone number, and email address
 */
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

export { contact };