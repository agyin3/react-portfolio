import React from 'react';
import  {Route, Redirect} from 'react-router-dom';
import { authenticate } from './authenticateToken';

const PrivateRoute = ({component: Component, ...rest}) => {
    const verified = authenticate()
    return (
        <Route
            {...rest}
            render = {props => {
                if (verified) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to ='/admin'/>;
                }
            }
        }
        />
    );
};

export default PrivateRoute;