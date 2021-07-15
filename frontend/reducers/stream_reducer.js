import {
  RECEIVE_TEXT_CHANNEL_STREAM
} from './../actions/stream_actions';

const streamReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TEXT_CHANNEL_STREAM:
      if(newState.textChannelStream) newState.textChannelStream.unsubscribe();
      newState.textChannelStream = action.stream;
      return newState;

    default:
      return oldState;
  }
}

export default streamReducer;