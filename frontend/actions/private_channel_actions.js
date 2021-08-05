import * as PrivateChannelApiUtil from "../util/private_channel_api_utils";
import { receiveServerError } from "./error_actions";
import { receiveMessages } from "./message_actions";

export const RECEIVE_PRIVATE_CHANNELS = "RECEIVE_PRIVATE_CHANNELS";
export const RECEIVE_PRIVATE_CHANNEL = "RECEIVE_PRIVATE_CHANNEL";

const receivePrivateChannels = channels => ({
  type: RECEIVE_PRIVATE_CHANNELS,
  channels
})

const receivePrivateChannel = channel => ({
  type: RECEIVE_PRIVATE_CHANNEL,
  channel
})

export const fetchChannels = (currentUserId = 1) => dispatch => {
  PrivateChannelApiUtil.fetchPrivateChannels(currentUserId)
    .then(
      channels => dispatch(receivePrivateChannels(channels)),
      errors => dispatch(receiveServerError(errors))
    );
}

export const fetchChannelByUser = (currentUserId = 1, otherUserId = 2) => {
  PrivateChannelApiUtil.fetchPrivateChannelByUser(currentUserId, otherUserId)
    .then(
      data => {
        dispatch(receivePrivateChannel(data.channel));
        dispatch(receiveMessages(data.messages));
      },
      errors => dispatch(receiveServerError(errors))
    );
}