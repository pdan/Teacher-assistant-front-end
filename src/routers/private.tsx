import React from 'react';
import { Route, Redirect, RouteProps,RouteComponentProps } from 'react-router-dom';
import { TranslationProps } from "react-i18next";
// import { isReturnStatement } from 'typescript';
import { isSignin } from '../services/index';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
    console.log(isSignin())
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