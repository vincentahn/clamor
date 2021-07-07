import * as ServerApiUtil from './../util/server_api_utils';

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
  ServerApiUtil.createServer(formData, currentUserId)
    .then(
      newServer => dispatch(receiveServer(newServer))
    )
};