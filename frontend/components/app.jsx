import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import Main from './main/main';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/channels" component={Main} />
      <Route path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;