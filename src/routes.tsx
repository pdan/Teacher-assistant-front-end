import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// import AuthRoute from './routers/auth-route';
import PrivateRoute from './routers/private'
import PublicRoute from "./routers/public";

import UserSignin from './pages/signin';
import UserSignup from './pages/signup';
import Dashboard from './pages/dashboard';
import Students from './pages/students';
import User from './pages/user';
import Index from './pages/index';

import './app.css';
import dashboard from "./pages/dashboard";



export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Redirect path="/" to="/user/profile" exact />
                <PrivateRoute roles={['teacher']} path="/dashboard"  component={dashboard} />
                <PublicRoute  path="/user/signin" component={UserSignin} restricted />
                <PublicRoute  path="/user/signup" component={UserSignup} restricted />
                <PrivateRoute roles={['teacher', 'student']} path="/user/profile" component={User} />
                <PrivateRoute roles={['teacher', 'student']} path="/dashboard" component={Dashboard} />
                <PrivateRoute roles={['teacher']} path="/teacher/students" component={Students} />
            </Switch>
        </Router>
    )
}

export default Routes;