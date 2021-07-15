export const createMessage = (message, channelId) => {
  App.cable.subscriptions.subscriptions[0].sendMessage({
    channelId,
    message
  });
}

export const deleteMessage = (messageId, currentUserId) => (
  App.cable.subscriptions.subscriptions[0].deleteMessage({
    currentUserId,
    messageId
  })
)