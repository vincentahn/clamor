import { RECEIVE_PRIVATE_CHANNELS, RECEIVE_PRIVATE_CHANNEL } from "../actions/private_channel_actions";

const privateChannelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_PRIVATE_CHANNELS:
      return action.channels;

    case RECEIVE_PRIVATE_CHANNEL:
      newState[action.channel.id] = action.channel;
      return newState;

    default:
      return oldState;
  }
};

export default privateChannelReducer;