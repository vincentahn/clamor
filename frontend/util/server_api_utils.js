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