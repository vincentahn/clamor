import { RECEIVE_USERS } from "./../actions/user_actions";

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_USERS:
      return action.users;

    default:
      return oldState;
  }
};

export default userReducer;