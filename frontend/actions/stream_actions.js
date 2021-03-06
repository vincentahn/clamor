export const RECEIVE_TEXT_CHANNEL_STREAM = "RECEIVE_TEXT_CHANNEL_STREAM";
export const REMOVE_TEXT_CHANNEL_STREAM = "REMOVE_TEXT_CHANNEL_STREAM";

export const RECEIVE_PRIVATE_CHANNEL_STREAM = "RECEIVE_PRIVATE_CHANNEL_STREAM";
export const REMOVE_PRIVATE_CHANNEL_STREAM = "REMOVE_PRIVATE_CHANNEL_STREAM";

export const receiveTextChannelStream = stream => ({
  type: RECEIVE_TEXT_CHANNEL_STREAM,
  stream
})

export const removeTextChannelStream = () => ({
  type: REMOVE_TEXT_CHANNEL_STREAM
})

export const receivePrivateChannelStream = stream => ({
  type: RECEIVE_PRIVATE_CHANNEL_STREAM,
  stream
})

export const removePrivateChannelStream = () => ({
  type: REMOVE_PRIVATE_CHANNEL_STREAM
})