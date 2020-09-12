import React from 'react';

const Movies = () => {
    return <h2>Movies</h2>;
};

export const config = {
    page: { name: 'Movies', link: 'movies' },
    routes: [{ path: '/movies', component: Movies }],
};

//export default Movies;
