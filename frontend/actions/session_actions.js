import * as SessionApiUtil from './../util/session_api_utils';

import { receiveServers } from './server_actions';
import { receiveSignupError, receiveLoginError } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
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
    .then(
      data => {
        dispatch(receiveServers(data.servers));
        return dispatch(receiveCurrentUser(data.session));
      },
      errors => dispatch(receiveSignupError(errors.responseJSON))
    )
);

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      data => {
        console.log(data);
        dispatch(receiveServers(data.servers));
        return dispatch(receiveCurrentUser(data.session));
      },
      errors => dispatch(receiveLoginError(errors.responseJSON))
    )
);

export const update = (formData, currentUserId) => dispatch => (
  SessionApiUtil.update(formData, currentUserId)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);