import * as PrivateChannelApiUtil from "../util/private_channel_api_utils";
import { receiveServerError } from "./error_actions";
import { receiveMessages } from "./message_actions";
import { receiveUsers } from "./user_actions";

export const RECEIVE_PRIVATE_CHANNELS = "RECEIVE_PRIVATE_CHANNELS";
export const RECEIVE_PRIVATE_CHANNEL = "RECEIVE_PRIVATE_CHANNEL";
export const RECEIVE_PRIVATE_CHANNEL_NOTIFICATION = "RECEIVE_PRIVATE_CHANNEL_NOTIFICATION";

const receivePrivateChannels = channels => ({
  type: RECEIVE_PRIVATE_CHANNELS,
  channels
})

const receivePrivateChannel = channel => ({
  type: RECEIVE_PRIVATE_CHANNEL,
  channel
})

const receivePrivateChannelNotification = channel => ({
  type: RECEIVE_PRIVATE_CHANNEL_NOTIFICATION,
  channel
})

export const fetchChannels = currentUserId => dispatch => {
  PrivateChannelApiUtil.fetchPrivateChannels(currentUserId)
    .then(
      channels => dispatch(receivePrivateChannels(channels)),
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    );
}

export const fetchChannelById = (currentUserId, channelId) => dispatch => {
  PrivateChannelApiUtil.fetchPrivateChannelById(currentUserId, channelId)
    .then(
      data => {
        dispatch(receiveUsers(data.users));
        dispatch(receiveMessages(data.messages));
        dispatch(receivePrivateChannel(data.channel));
      },
      errorData => dispatch(receiveServerError(errorData.responseJSON.errors))
    )
}

export const fetchChannelByUser = (currentUserId, otherUserId, history) => dispatch => {
  PrivateChannelApiUtil.fetchPrivateChannelByUser(currentUserId, otherUserId)
    .then(
      data => {
        dispatch(receiveUsers(data.users));
        dispatch(receiveMessages(data.messages));
        dispatch(receivePrivateChannel(data.channel));
        history.push(`/channels/@me/${data.channel.id}`)
      },
      errors => dispatch(receiveServerError(errors))
    );
}

export const obtainPrivateChannelNotification = privateChannel => dispatch => {
  dispatch(receivePrivateChannelNotification(privateChannel))
}