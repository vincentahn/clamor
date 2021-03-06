import * as UserApiUtil from './../util/user_api_utils';

import { receiveServerError } from './error_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const fetchUsers = currentUserId => dispatch => {
  UserApiUtil.fetchUsers(currentUserId)
    .then(
      users => dispatch(receiveUsers(users)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}