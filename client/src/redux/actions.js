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

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const loadingGetOpportunities = () => ({
  type: 'LOADING_GET_OPPORTUNITIES'
});

export const successGetOpportunities = data => ({
  type: 'SUCCESS_GET_OPPORTUNITIES',
  data
});

export const errorGetOpportunities = error => ({
  type: 'ERROR_GET_OPPORTUNITIES',
  error
});

export const loadingPostOpportunities = () => ({
  type: 'LOADING_POST_OPPORTUNITIES'
});

export const successPostOpportunities = data => ({
  type: 'SUCCESS_POST_OPPORTUNITIES',
  data
});

export const errorPostOpportunities = error => ({
  type: 'ERROR_POST_OPPORTUNITIES',
  error
});