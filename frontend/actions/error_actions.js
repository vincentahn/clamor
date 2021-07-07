export const RECEIVE_SIGNUP_ERROR = "RECEIVE_SIGNUP_ERROR";
export const RECEIVE_LOGIN_ERROR = "RECEIVE_LOGIN_ERROR";

export const receiveSignupError = errors => ({
  type: RECEIVE_SIGNUP_ERROR,
  errors
});

export const receiveLoginError = errors => ({
  type: RECEIVE_LOGIN_ERROR,
  errors
})