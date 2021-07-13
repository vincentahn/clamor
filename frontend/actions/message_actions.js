import * as MessageApiUtil from "./../util/message_api_utils";
import { receiveServerError } from "./error_actions";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
})

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

const removeMessage = message => ({
  type: REMOVE_MESSAGE,
  message
})

export const createMessage = (message, currentUserId) => dispatch => {
  MessageApiUtil.createMessage(message, currentUserId)
    .then(
      newMessage => dispatch(receiveMessage(newMessage)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}

export const deleteMessage = (messageId, currentUserId) => dispatch => {
  MessageApiUtil.deleteMessage(messageId, currentUserId)
    .then(
      newMessage => dispatch(removeMessage(newMessage)),
      errors => dispatch(receiveServerError(errors.responseJSON))
    )
}