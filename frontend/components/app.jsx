import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Splash from './splash/splash';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={Splash} />
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;