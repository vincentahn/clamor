export const RECEIVE_SIGNUP_ERROR = "RECEIVE_SIGNUP_ERROR";
export const RECEIVE_LOGIN_ERROR = "RECEIVE_LOGIN_ERROR";
export const RECEIVE_SERVER_ERROR = "RECEIVE_SERVER_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSignupError = errors => ({
  type: RECEIVE_SIGNUP_ERROR,
  errors
});

export const receiveLoginError = errors => ({
  type: RECEIVE_LOGIN_ERROR,
  errors
})

export const receiveServerError = errors => ({
  type: RECEIVE_SERVER_ERROR,
  errors
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const wipeErrors = () => dispatch => dispatch(clearErrors())