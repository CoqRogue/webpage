import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { pages, routes } from './pages';

import './App.scss';
/*
const pages = [
    'Home',
    'Movies',
    'About',
    'Code',
    'Links',
    'Videos',
    'Password',
    'Dice',
];
*/

const App = () => (
    <div className="App">
        <Router>
            <header className="App-header">
                <h1>Coq Rouge</h1>
                <nav>
                    <ul>
                        {pages.map((page) => (
                            <li key={page.link}>
                                <Link to={page.link}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;
