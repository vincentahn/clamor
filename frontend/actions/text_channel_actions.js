export const RECEIVE_TEXT_CHANNELS = "RECEIVE_TEXT_CHANNELS";
export const RECEIVE_TEXT_CHANNEL = "RECEIVE_TEXT_CHANNEL";

import * as TextChannelApiUtil from "../util/text_channel_api_utils";
import { receiveServerError } from "./error_actions";

export const receiveTextChannels = channels => ({
  type: RECEIVE_TEXT_CHANNELS,
  channels
})

const receiveTextChannel = channel => ({
  type: RECEIVE_TEXT_CHANNEL,
  channel
})

export const createTextChannel = (name, serverId, currentUserId) => dispatch => {
  TextChannelApiUtil.createTextChannel(name, serverId, currentUserId)
    .then(
      newChannel => dispatch(receiveTextChannel(newChannel)),
      errors => dispatch(receiveServerError(errors))
    )
}