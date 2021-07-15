export const RECEIVE_TEXT_CHANNEL_STREAM = "RECEIVE_TEXT_CHANNEL_STREAM";

export const receiveTextChannelStream = stream => ({
  type: RECEIVE_TEXT_CHANNEL_STREAM,
  stream
})