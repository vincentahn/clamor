export const createMessage = (message, currentUserId) => {
  App.cable.subscriptions.subscriptions[0].sendMessage({
    id: currentUserId,
    message
  });
}

export const deleteMessage = (messageId, currentUserId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/messages/${messageId}`,
    data: { currentUserId }
  })
)