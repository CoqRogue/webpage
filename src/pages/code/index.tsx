import React from 'react';

const Code = () => {
    return <h2>Code</h2>;
};

export const config = {
    page: { name: 'Code', link: 'code' },
    routes: [
        { path: '/', component: Code, exact: true },
        { path: '/code', component: Code },
    ],
};

export default Code;
