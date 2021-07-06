export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const update = (formData, currentUserId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${currentUserId}`,
    data: formData,
    contentType: false,
    processData: false
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);