import React from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import PublicRoute from './routers/public';
import PrivateRoute from './routers/private';

import UserSignin from './pages/signin';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Index from './pages/index';

import './app.css';


export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute path="/" component={Index} restricted={false} exact />
                <PublicRoute path="/user/signin" component={UserSignin} restricted={false} />
                <PublicRoute path="/user/profile" component={Profile} restricted={false} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/course/:courseid" component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default Routes;