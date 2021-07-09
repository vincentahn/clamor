import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Modal from './../modal'
import ServerIndexContainer from './server/server_index_container';
import MainIndex from './main_index/main_index';
import CurrentUserOptionsContainer from './current_user/current_user_options_container'

const Main = () => (
  <div className="main">
    <Modal />
    
    <ServerIndexContainer />
    <div className="column-2">
      <MainIndex />
      <CurrentUserOptionsContainer />
    </div>
    <div className="column-3"></div>
  </div>
)

export default Main;