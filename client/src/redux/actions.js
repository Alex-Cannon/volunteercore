export const setUsername = username => ({
  type: 'SET_USERNAME',
  value: username,
});

export const setPassword = password => ({
  type: 'SET_PASSWORD',
  value: password
});

export const authLoading = () => ({
  type: 'AUTH_LOADING'
});

export const authSuccess = data => ({
  type: 'AUTH_SUCCESS',
  data
});

export const authError = error => ({
  type: 'AUTH_ERROR',
  error
});