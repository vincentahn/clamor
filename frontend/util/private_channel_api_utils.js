export const fetchPrivateChannels = (currentUserId) => (
  $.ajax({
    method: 'GET',
    url: '/api/private_channels',
    data: {
      currentUserId
    }
  })
);

export const fetchPrivateChannelByUser = (currentUserId, otherUserId) => (
  $.ajax({
    method: 'GET',
    url: `api/private_channels/user/${otherUserId}`,
    data: {
      currentUserId
    }
  })
)

export const fetchPrivateChannelById = (currentUserId, channelId) => (
  $.ajax({
    method: 'GET',
    url: `api/private_channels/${channelId}`,
    data: {
      currentUserId
    }
  })
)