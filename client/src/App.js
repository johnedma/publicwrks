import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LoginPanel from './components/Login';
import Navbar from './components/Navbar';
import UserList from './components/UsersList';
import ProductDetail from './components/ProductDetail'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.needLogin === true
            ? <Redirect to='/login' />
            : <Component {...props} />
    )} />
)

function App() {
    // const [loaded, setLoaded] = useState(false);
    // const dispatch = useDispatch();
    const needLogin = useSelector(state => !state.authentication.token);

    // useEffect(() => {
    //   setLoaded(true);
    //   dispatch(loadToken());
    // }, [dispatch]);

    // if (!loaded) {
    //   return null;
    // }

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/login" component={LoginPanel} />
                <PrivateRoute path="/admin"
                    needLogin={needLogin}
                    component={Dashboard} />
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path="/art/:id">
                    <ProductDetail />
                </Route>

                <Route path="/" component={Home} />
                {/* <Home />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
