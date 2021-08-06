import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_PRIVATE_CHANNEL_STREAM,
  RECEIVE_TEXT_CHANNEL_STREAM, 
  REMOVE_PRIVATE_CHANNEL_STREAM, 
  REMOVE_TEXT_CHANNEL_STREAM
} from './../actions/stream_actions';

const streamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TEXT_CHANNEL_STREAM:
      if(newState.textChannelStream) newState.textChannelStream.unsubscribe();
      newState.textChannelStream = action.stream;
      return newState;

    case REMOVE_TEXT_CHANNEL_STREAM:
      if(newState.textChannelStream){
        newState.textChannelStream.unsubscribe();
        delete newState.textChannelStream;
      }
      return newState;

    case RECEIVE_PRIVATE_CHANNEL_STREAM:
      if(newState.privateChannelStream) newState.privateChannelStream.unsubscribe();
      newState.privateChannelStream = action.stream;
      return newState;

    case REMOVE_PRIVATE_CHANNEL_STREAM:
      if(newState.privateChannelStream){
        newState.privateChannelStream.unsubscribe();
        delete newState.privateChannelStream;
      }
      return newState;

    case LOGOUT_CURRENT_USER:
      if(newState.textChannelStream) newState.textChannelStream.unsubscribe();
      if(newState.privateChannelStream) newState.privateChannelStream.unsubscribe();
      return {};

    default:
      return oldState;
  }
}

export default streamReducer;