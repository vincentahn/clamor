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