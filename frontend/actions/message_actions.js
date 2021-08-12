import * as MessageApiUtil from "./../util/message_api_utils";
import { receiveServerError } from "./error_actions";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
})

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

export const removeMessage = message => ({
  type: REMOVE_MESSAGE,
  message
})

export const createMessage = (stream, message, channelId) => dispatch => {
  MessageApiUtil.createMessage(stream, message, channelId);
}

export const deleteMessage = (stream, messageId, currentUserId) => dispatch => {
  MessageApiUtil.deleteMessage(stream, messageId, currentUserId)
}