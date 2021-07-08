import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER
} from './../actions/server_actions';

import {
  LOGOUT_CURRENT_USER
} from './../actions/session_actions';

const serverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_SERVERS:
      if(action.servers === undefined) return oldState;
      return action.servers;

    case RECEIVE_SERVER:
      newState[action.server.id] = action.server;
      return newState;

    case REMOVE_SERVER:
      delete newState[action.serverId]
      return newState;

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return oldState;
  }
};

export default serverReducer;