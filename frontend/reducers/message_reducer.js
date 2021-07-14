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
      newState[action.message.id] = {
        id: action.message.id,
        body: action.message.body,
        author_id: action.message.author_id,
        created_at: action.message.created_at,
        updated_at: action.message.updated_at
      };
      return newState;

    case REMOVE_MESSAGE:
      delete newState[action.messageId];
      return newState;

    default:
      return oldState;
  }
};

export default messageReducer;