import{
  RECEIVE_TEXT_CHANNEL,
  RECEIVE_TEXT_CHANNELS
} from './../actions/text_channel_actions';

import{ 
  RECEIVE_MESSAGE, REMOVE_MESSAGE
} from '../actions/message_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const textChannelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TEXT_CHANNELS:
      return action.channels;

    case RECEIVE_TEXT_CHANNEL:
      newState[action.channel.id] = {
        id: action.channel.id,
        name: action.channel.name,
        message_ids: []
      };
      return newState;

    case RECEIVE_MESSAGE:
      const receiveChannelId = action.message.typeable_id;
      let receiveMessageIds = newState[receiveChannelId].message_ids;

      if(!receiveMessageIds.includes(action.message.id)) receiveMessageIds.push(action.message.id);
      return newState;

    case REMOVE_MESSAGE:
      const removeChannelId = action.message.typeable_id;
      let removeMessageIds = newState[removeChannelId].message_ids;

      const index = removeMessageIds.indexOf(action.message.id);
      if(index > -1) removeMessageIds.splice(index, 1);
      return newState;

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return oldState;
  }
};

export default textChannelReducer;