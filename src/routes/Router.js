import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*Páginas*/
import HomePage from '../pages/HomePage';
import CharacterDetails from '../pages/CharacterDetails';
import ErrorPage from '../pages/ErrorPage';

export default function Router() {
    return (
        <Switch>       
            <Route exact path={'/'}>
                <HomePage />
            </Route>
            <Route exact path={'/character/:id'}>
                <CharacterDetails />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}