import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";
import { RECEIVE_PRIVATE_CHANNELS, RECEIVE_PRIVATE_CHANNEL, RECEIVE_PRIVATE_CHANNEL_NOTIFICATION } from "../actions/private_channel_actions";

const privateChannelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_PRIVATE_CHANNELS:
      return action.channels;

    case RECEIVE_PRIVATE_CHANNEL:
      newState[action.channel.id] = action.channel
      if(!action.channel.message_ids) newState[action.channel.id].message_ids = [];
      return newState;

    case RECEIVE_PRIVATE_CHANNEL_NOTIFICATION:
      if(!newState[action.channel.id]){
        newState[action.channel.id] = action.channel;
        if(!action.channel.message_ids) newState[action.channel.id].message_ids = [];
        if(!newState[action.channel.id].notificationCount) newState[action.channel.id].notificationCount = 1;
      }else{
        newState[action.channel.id] = Object.assign(newState[action.channel.id], action.channel)
        if(!newState[action.channel.id].notificationCount) newState[action.channel.id].notificationCount = 1;
        else newState[action.channel.id].notificationCount++;
      }
      return newState;

    case RECEIVE_MESSAGE:
      if(action.message.typeable_type === "PrivateChannel"){
        const receiveChannelId = action.message.typeable_id;
        let receiveMessageIds = newState[receiveChannelId].message_ids;
  
        if(!receiveMessageIds.includes(action.message.id)) receiveMessageIds.push(action.message.id);
        return newState;
      }else{
        return oldState;
      }

    case REMOVE_MESSAGE:
      if(action.message.typeable_type === "PrivateChannel"){
        const removeChannelId = action.message.typeable_id;
        let removeMessageIds = newState[removeChannelId].message_ids;
  
        const index = removeMessageIds.indexOf(action.message.id);
        if(index > -1) removeMessageIds.splice(index, 1);
        return newState;
      }else{
        return oldState;
      }

    default:
      return oldState;
  }
};

export default privateChannelReducer;