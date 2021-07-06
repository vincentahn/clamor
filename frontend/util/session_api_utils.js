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

export const update = (user, currentUserId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${currentUserId}`,
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);