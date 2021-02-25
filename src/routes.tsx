import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PublicRoute from './routers/public';
import PrivateRoute from './routers/private';

import UserSignin from './pages/signin';
import UserSignup from './pages/signup';
import Dashboard from './pages/dashboard';
import User from './pages/user';
import Index from './pages/index';

import './app.css';


export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" component={Index} restricted={false} exact />
                <PublicRoute path="/user/signin" component={UserSignin} restricted={true} />
                <PublicRoute path="/user/signup" component={UserSignup} restricted={true} />
                <PrivateRoute path="/user" component={User} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default Routes;