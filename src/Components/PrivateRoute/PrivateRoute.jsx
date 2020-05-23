
import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Cookies from 'js-cookie'

export default function PrivateRoute({ children, ...rest }) {


    const isAuthenticated=Cookies.get('token')
 
      return (
        <Route
          {...rest}
          render={({ location }) =>
          isAuthenticated ? 
            (  children) 
          : 
            ( <Redirect to={{ pathname: "/",state: { from: location }}} /> )
          }
        />
      );
 }