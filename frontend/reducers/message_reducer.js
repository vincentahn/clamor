import { 
  RECEIVE_MESSAGES 
} from "../actions/message_actions";

const messageReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_MESSAGES:
      return action.messages;

    default:
      return oldState;
  }
};

export default messageReducer;