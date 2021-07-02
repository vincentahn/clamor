import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUserId = action.currentUserId;
      return newState;
    
    case LOGOUT_CURRENT_USER:
      newState.currentUserId = undefined;
      return newState;

    default:
      return oldState;
  }
};

export default sessionReducer;