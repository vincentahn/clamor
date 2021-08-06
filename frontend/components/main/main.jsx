import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Modal from './../modal'
import ServerIndexContainer from './server/server_index_container';
import MainIndexContainer from './main_index/main_index_container';
import TextChannelIndexContainer from './text_channel/text_channel_index_container'
import CurrentUserOptionsContainer from './current_user/current_user_options_container';
import UserIndexContainer from './user_index/user_index_container';
import ServerMainIndexContainer from './server/server_main_index_container';
import TextMessageIndexContainer from './message_index/text_message_index_container';

const Main = () => (
  <div className="main">
    <Modal />
    
    <Route path="/channels" component={ServerIndexContainer} />
    <div className="column-2">
      <Switch>
        <Route path="/channels/@me" component={MainIndexContainer}/>
        <Route path="/channels/:serverId" component={TextChannelIndexContainer} />
        <Redirect to="/channels/@me" />
      </Switch>

      <CurrentUserOptionsContainer />
    </div>
    <div className="column-3">
      <Switch>
        <Route exact path="/channels/@me/users" component={UserIndexContainer}/>
        <Route exact path="/channels/@me/servers" component={ServerMainIndexContainer} />
        <Route exact path="/channels/:serverId/:channelId" component={TextMessageIndexContainer} />
      </Switch>
    </div>
  </div>
)

export default Main;