import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LoginPanel from './components/Login';
import Navbar from './components/Navbar';
import UserList from './components/UsersList';
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound';
import CartPage from './components/CartPage';
import OurMission from './components/OurMission';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.needLogin === true
            ? <Redirect to='/login' />
            : <Component {...props} />
    )} />
)

function App() {

    const needLogin = useSelector(state => !state.authentication.token);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/login" component={LoginPanel} />
                <PrivateRoute path="/admin"
                    needLogin={needLogin}
                    component={Dashboard} />
                <Route path="/users" component={UserList} />

                <Route path="/art/:id" exact component={ProductDetail} />
                <Route path="/mission" component={OurMission} />
                <Route path='/cart' component={CartPage} />
                <Route path="/" exact component={Home} />
                <Route component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
}

export default App;
