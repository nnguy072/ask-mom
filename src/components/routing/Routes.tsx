import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../auth/Login';
import PrivateRoute from './PrivateRoutes';
import Landing from '../landing/Landing';

const Routes: React.FC = () => 
<section>
  <Switch>
    <Route exact path='/login' component={Login} />
    <PrivateRoute exact path='/landing' component={Landing} />
  </Switch>
</section>

export default Routes;