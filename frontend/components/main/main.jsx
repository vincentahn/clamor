import React from 'react';
import CurrentUserOptionsContainer from './current_user/current_user_options_container'

const Main = () => (
  <div className="main">
    <div className="column-1"></div>
    <div className="column-2">
      <div className="row-1"></div>
      <CurrentUserOptionsContainer />
    </div>
    <div className="column-3"></div>
  </div>
)

export default Main;