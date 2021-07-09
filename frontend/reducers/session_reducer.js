import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from "./../actions/session_actions";

import {
  RECEIVE_SERVER,
  REMOVE_SERVER
} from './../actions/server_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      Object.assign(newState, action.currentUser);
      return newState;
    
    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_SERVER:
      newState.subscribedServers.push(action.server.id);
      return newState;

    case REMOVE_SERVER:
      const index = newState.subscribedServers.indexOf(action.serverId);
      if(index > -1) newState.subscribedServers.splice(index, 1);
      return newState;

    default:
      return oldState;
  }
};

export default sessionReducer;