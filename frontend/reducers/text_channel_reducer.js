import{
  RECEIVE_TEXT_CHANNELS
} from './../actions/text_channel_actions';

import{ 
  RECEIVE_MESSAGE, REMOVE_MESSAGE
} from '../actions/message_actions';

const textChannelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_TEXT_CHANNELS:
      return action.channels;

    case RECEIVE_MESSAGE:
      const receivedChannelId = action.message.typeable_id;
      newState[receivedChannelId].message_ids.push(action.message.id);
      return newState;

    case REMOVE_MESSAGE:
      const removedChannelId = action.message.typeable_id;
      const messageIds = newState[removedChannelId].message_ids;
      const index = messageIds.indexOf(action.message.id);
      if(index > -1) newState[removedChannelId].message_ids.splice(index, 1);
      return newState;

    default:
      return oldState;
  }
};

export default textChannelReducer;