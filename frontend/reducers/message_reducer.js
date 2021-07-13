import { 
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from "../actions/message_actions";

const messageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_MESSAGES:
      return action.messages;

    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;

    case REMOVE_MESSAGE:
      delete newState[action.messageId];
      return newState;

    default:
      return oldState;
  }
};

export default messageReducer;