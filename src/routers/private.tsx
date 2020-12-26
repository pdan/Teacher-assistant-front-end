import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
// import { isReturnStatement } from 'typescript';
import { isSignin } from '../api/index';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentClass
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isSignin() ?
                <Component {...props} />
                : <Redirect to="/user/signin" />
        )} />
    );

};

export default PrivateRoute;