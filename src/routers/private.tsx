import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { TranslationProps } from "react-i18next";
// import { isReturnStatement } from 'typescript';
import { isSignin } from '../services/index';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    roles: string[]
}

const role = localStorage.getItem('role');

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, roles, ...rest }) => {
    
    const checkTheRole = (): boolean => {
        if (role && roles?.includes(role)) {
            return true
        }
        return false
    }
    
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => {
            if (isSignin())
                if (checkTheRole())
                    return <Component {...props} />
                else return <Redirect to="/dashboard" />
            else <Redirect to="/user/signin" />
        }} />
    );

};

export default PrivateRoute;