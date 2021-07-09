import{
  RECEIVE_TEXT_CHANNELS
} from './../actions/text_channel_actions';

const textChannelReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_TEXT_CHANNELS:
      return action.channels;

    default:
      return oldState;
  }
};

export default textChannelReducer;