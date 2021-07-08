import * as ServerApiUtil from './../util/server_api_utils';

import { receiveServerError } from './error_actions';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
})

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
})

export const createServer = (formData, currentUserId) => dispatch => {
  formData.append('currentUserId', currentUserId);

  ServerApiUtil.createServer(formData)
    .then(
      newServer => dispatch(receiveServer(newServer)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
};