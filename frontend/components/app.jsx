import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';

import SplashContainer from './splash/splash_container';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import Main from './main/main';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/channels" component={Main} />
      <Route path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;