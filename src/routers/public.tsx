import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isSignin } from '../api/index';

interface PublicRouteProps extends RouteProps {
    restricted: boolean
    component: React.ComponentClass
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, restricted, ...rest }) => {

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isSignin() && restricted ?
                <Redirect to="/dashboard" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;