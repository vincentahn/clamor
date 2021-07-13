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

export const fetchServer = (currentUserId, serverId, callback) => dispatch => {
  ServerApiUtil.fetchServer(currentUserId, serverId)
    .then(
      data => {
        dispatch(receiveTextChannels(data.text_channels));
        dispatch(receiveServer(data.server));

        if(data.messages) dispatch(receiveMessages(data.messages));
        
        if(callback) callback();

        return dispatch(receiveUsers);
      },
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}