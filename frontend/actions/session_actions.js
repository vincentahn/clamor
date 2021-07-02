import * as SessionApiUtil from './../util/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUserId => ({
  type: RECEIVE_CURRENT_USER,
  currentUserId
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then(currentUserId => dispatch(receiveCurrentUser(currentUserId)))
);

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(currentUserId => dispatch(receiveCurrentUser(currentUserId)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);