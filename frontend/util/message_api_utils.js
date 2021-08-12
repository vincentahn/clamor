export const createMessage = (stream, message, channelId) => {
  stream.sendMessage({
    channelId,
    message
  });
}

export const deleteMessage = (stream, messageId, currentUserId) => {
  stream.deleteMessage({
    currentUserId,
    messageId
  })
}