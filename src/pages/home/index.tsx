import React from 'react';

const Home = () => {
    return <h2>Home</h2>;
};

export const config = {
    page: { name: 'Home', link: 'home' },
    routes: [
        { path: '/', component: Home, exact: true },
        { path: '/home', component: Home },
    ],
};

export default Home;
