export const fetchPrivateChannels = (currentUserId) => (
  $.ajax({
    method: 'GET',
    url: '/api/private_channels',
    data: {
      currentUserId
    }
  })
);