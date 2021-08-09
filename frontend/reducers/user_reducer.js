import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "./../actions/user_actions";

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_USERS:
      return Object.assign(newState, action.users);

    case RECEIVE_USER:
      newState[action.user.id] = action.user
      return newState;

    case LOGOUT_CURRENT_USER:
      return {};

    default:
      return oldState;
  }
};

export default userReducer;