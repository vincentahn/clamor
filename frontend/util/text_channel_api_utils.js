export const createTextChannel = (channelName, serverId, currentUserId) => (
  $.ajax({
    method: 'POST',
    url: '/api/text_channels',
    data: {
      channelName,
      serverId,
      currentUserId
    }
  })
);