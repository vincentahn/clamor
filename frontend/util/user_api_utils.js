export const fetchUsers = currentUserId => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { currentUserId }
  })
)