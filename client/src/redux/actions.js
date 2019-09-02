// Authentication
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

// Get opportunity
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

// Post opportunity
export const loadingPostOpportunity = () => ({
  type: 'LOADING_POST_OPPORTUNITY'
});

export const successPostOpportunity = data => ({
  type: 'SUCCESS_POST_OPPORTUNITY',
  data
});

export const errorPostOpportunity = error => ({
  type: 'ERROR_POST_OPPORTUNITY',
  error
});

// Post partner
export const setPartnerFormField = (field, value) => ({
  type: 'SET_PARTNER_FORM_FIELD',
  field,
  value
});

export const loadingPostPartner = () => ({
  type: 'LOADING_POST_PARTNER'
});

export const successPostPartner = () => ({
  type: 'SUCCESS_POST_PARTNER'
});

export const errorPostPartner = error => ({
  type: 'ERROR_POST_PARTNER',
  error
});

// Partner search
export const setPartnerSearchField = (field, value) => ({
  type: 'SET_PARTNER_SEARCH_FIELD',
  field,
  value
});

export const loadingPartnerSearch = () => ({
  type: 'LOADING_PARTNER_SEARCH'
});

export const successPartnerSearch = data => ({
  type: 'SUCCESS_PARTNER_SEARCH',
  data
});

export const errorPartnerSearch = error => ({
  type: 'ERROR_PARTNER_SEARCH',
  error
});