export const createServer = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/servers',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateServer = (formData, serverId) => (
  $.ajax({
    method: 'PATCH',
    url: `api/servers/${serverId}`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const subscribeServer = (currentUserId, serverId) => (
  $.ajax({
    method: 'POST',
    url: `api/server_memberships/`,
    data: {
      currentUserId,
      serverId
    }
  })
)

export const unsubscribeServer = (currentUserId, serverId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/server_memberships/${serverId}`,
    data: { currentUserId }
  })
)

export const deleteServer = (currentUserId, serverId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/servers/${serverId}`,
    data: { currentUserId }
  })
)

export const fetchServers = currentUserId => (
  $.ajax({
    method: 'GET',
    url: 'api/servers',
    data: { currentUserId }
  })
)

export const fetchServer = (currentUserId, serverId) => (
  $.ajax({
    method: 'GET',
    url: `api/servers/${serverId}`,
    data: { currentUserId }
  })
)