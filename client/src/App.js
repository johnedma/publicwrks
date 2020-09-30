import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

import UserList from './components/UsersList';


function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
