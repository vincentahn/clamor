import * as ServerApiUtil from './../util/server_api_utils';

import { receiveServerError } from './error_actions';
import { receiveUsers } from './user_actions';
import { receiveTextChannels } from './text_channel_actions';
import { receiveMessages } from './message_actions';

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
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
};

export const updateServer = (formData, currentUserId, serverId) => dispatch => {
  formData.append('currentUserId', currentUserId);

  ServerApiUtil.updateServer(formData, serverId)
    .then(
      newServer => dispatch(receiveServer(newServer)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}

export const subscribeServer = (currentUserId, serverId) => dispatch => {
  ServerApiUtil.subscribeServer(currentUserId, serverId)
    .then(
      newServer => dispatch(receiveServer(newServer)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}

export const unsubscribeServer = (currentUserId, serverId) => dispatch => {
  ServerApiUtil.unsubscribeServer(currentUserId, serverId)
    .then(
      () => dispatch(removeServer(serverId)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}

export const deleteServer = (currentUserId, serverId) => dispatch => {
  ServerApiUtil.deleteServer(currentUserId, serverId)
    .then(
      () => dispatch(removeServer(serverId)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}

export const fetchServers = (currentUserId) => dispatch => {
  ServerApiUtil.fetchServers(currentUserId)
    .then(
      servers => dispatch(receiveServers(servers)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}

export const fetchServer = (currentUserId, serverId) => dispatch => {
  return ServerApiUtil.fetchServer(currentUserId, serverId)
    .then(
      data => {
        dispatch(receiveTextChannels(data.text_channels));
        dispatch(receiveServer(data.server));

        if(data.messages) dispatch(receiveMessages(data.messages));
        
        dispatch(receiveUsers(data.users));
      },
      errorData => {
        dispatch(receiveServerError(errorData.responseJSON.errors));

        if(errorData.responseJSON.server_does_not_exist) dispatch(removeServer(serverId));
      }
    )
}