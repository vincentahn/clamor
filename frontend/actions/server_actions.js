import * as ServerApiUtil from './../util/server_api_utils';

import { receiveServerError } from './error_actions';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

export const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
})

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
})

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
})

export const createServer = (formData, currentUserId) => dispatch => {
  formData.append('currentUserId', currentUserId);

  ServerApiUtil.createServer(formData)
    .then(
      newServer => dispatch(receiveServer(newServer)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
};

export const updateServer = (formData, currentUserId, serverId) => dispatch => {
  formData.append('currentUserId', currentUserId);

  ServerApiUtil.updateServer(formData, serverId)
    .then(
      newServer => dispatch(receiveServer(newServer)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}

export const unsubscribeServer = (currentUserId, serverId) => dispatch => {
  ServerApiUtil.unsubscribeServer(currentUserId, serverId)
    .then(
      () => dispatch(removeServer(serverId)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}

export const deleteServer = (currentUserId, serverId) => dispatch => {
  ServerApiUtil.deleteServer(currentUserId, serverId)
    .then(
      () => dispatch(removeServer(serverId)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}

export const fetchServers = (currentUserId) => dispatch => {
  ServerApiUtil.fetchServers(currentUserId)
    .then(
      servers => dispatch(receiveServers(servers)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}