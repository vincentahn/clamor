export const createMessage = (message, currentUserId) => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: { currentUserId, message }
  })
)

export const deleteMessage = (messageId, currentUserId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/messages/${messageId}`,
    data: { currentUserId }
  })
)