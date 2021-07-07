import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER
} from './../actions/server_actions';

const serverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_SERVERS:
      return action.servers;

    case RECEIVE_SERVER:
      newState[action.server.id] = action.server;
      return newState;

    default:
      return oldState;
  }
};

export default serverReducer;