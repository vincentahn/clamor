import * as SessionApiUtil from './../util/session_api_utils';

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
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveSignupError(errors.responseJSON))
    )
);

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
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