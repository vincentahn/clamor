import * as UserApiUtil from './../util/user_api_utils';

import { receiveServerError } from './error_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const fetchUsers = currentUserId => dispatch => {
  UserApiUtil.fetchUsers(currentUserId)
    .then(
      users => dispatch(receiveUsers(users)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}