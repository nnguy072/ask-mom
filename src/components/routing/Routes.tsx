import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../auth/Login';
import PrivateRoute from './PrivateRoutes';
import Landing from '../landing/Landing';
import Logout from '../auth/Logout';

const Routes: React.FC = () => 
<Switch>
  <Route exact path='/login' component={Login} />
  <Route exact path='/logout' component={Logout} />
  <PrivateRoute exact path='/landing' component={Landing} />
</Switch>

export default Routes;