import React from 'react';

const About = () => {
    return <h2>About</h2>;
};

export const config = {
    page: { name: 'About', link: 'about' },
    routes: [
        { path: '/', component: About, exact: true },
        { path: '/about', component: About },
    ],
};

export default About;
