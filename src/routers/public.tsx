import React from 'react';
import { Route, Redirect, RouteProps,RouteComponentProps } from 'react-router-dom';
import { TranslationProps } from "react-i18next";
import { isSignin } from '../services/index';

interface PublicRouteProps extends RouteProps {
    restricted: boolean
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PublicRoute: React.FC<any> = ({ component: Component, restricted, ...rest }) => {

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