import React from 'react';
import Modal from './../modal'
import ServerIndexContainer from './server/server_index_container';
import CurrentUserOptionsContainer from './current_user/current_user_options_container'

const Main = () => (
  <div className="main">
    <Modal />
    
    <ServerIndexContainer />
    <div className="column-2">
      <div className="row-1"></div>
      <CurrentUserOptionsContainer />
    </div>
    <div className="column-3"></div>
  </div>
)

export default Main;