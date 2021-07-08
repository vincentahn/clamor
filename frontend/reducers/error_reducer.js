import {
  RECEIVE_SIGNUP_ERROR,
  RECEIVE_LOGIN_ERROR
} from "./../actions/error_actions";

const _default = {
  signupErrors: [],
  loginErrors: []
}

const errorReducer = (oldState = _default, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case RECEIVE_SIGNUP_ERROR:
      newState.signupErrors = action.errors;
      return newState;

    case RECEIVE_LOGIN_ERROR:      
      newState.loginErrors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default errorReducer;