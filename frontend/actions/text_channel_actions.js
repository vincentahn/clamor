export const RECEIVE_TEXT_CHANNELS = "RECEIVE_TEXT_CHANNELS";

export const receiveTextChannels = channels => ({
  type: RECEIVE_TEXT_CHANNELS,
  channels
})