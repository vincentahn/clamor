export const createServer = (formData, currentUserId) => (
  $.ajax({
    method: 'POST',
    url: 'api/servers',
    data: Object.assign(formData, { currentUserId })
  })
);