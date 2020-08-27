import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import store from '../../store';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  const { isAuthenticated } = store.getState().Auth;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ?
          (<Component {...routeProps} />) :
          (<Redirect
              to={{
                pathname: '/login',
                state: { from: routeProps.location }
              }}
          />)
      }
    />
  );
};

export default PrivateRoute;