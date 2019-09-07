// POST Partner
export const setPostPartnerFormData = formData => ({
  type: "SET_POST_PARTNER_FORM_DATA",
  formData
});

export const setPostPartnerResult = result => ({
  type: "SET_POST_PARTNER_RESULT",
  result
});

export const setPostPartnerError = error => ({
  type: "SET_POST_PARTNER_ERROR",
  error
});

export const postPartnerLoading = () => ({
  type: "POST_PARTNER_LOADING"
});

// GET Partners
export const setPartnerListOptions = options => ({
  type: "SET_PARTNER_LIST_OPTIONS",
  options
});

export const setPartnerListResult = result => ({
  type: "SET_PARTNER_LIST_RESULT",
  result
});

export const setPartnerListError = error => ({
  type: "SET_PARTNER_LIST_ERROR",
  error
});

export const partnerListLoading = () => ({
  type: "PARTNER_LIST_LOADING"
});

// GET Partner
export const setGetPartnerResult = result => ({
  type: "SET_GET_PARTNER_RESULT",
  result
});

export const setGetPartnerError = error => ({
  type: "SET_GET_PARTNER_ERROR",
  error
});

export const getPartnerLoading = () => ({
  type: "GET_PARTNER_LOADING"
});

// PUT Partner
export const setPutPartnerFormData = formData => ({
  type: "SET_PUT_PARTNER_FORM_DATA",
  formData
});

export const setPutPartnerResult = result => ({
  type: "SET_PUT_PARTNER_RESULT",
  result
});

export const setPutPartnerError = error => ({
  type: "SET_PUT_PARTNER_ERROR",
  error
});

export const putPartnerLoading = () => ({
  type: "PUT_PARTNER_LOADING"
});

// Delete Partner
export const setDeletePartnerResult = result => ({
  type: "SET_DELETE_PARTNER_RESULT",
  result
});

export const setDeletePartnerError = error => ({
  type: "SET_DELETE_PARTNER_ERROR",
  error
});

export const deletePartnerLoading = () => ({
  type: "DELETE_PARTNER_LOADING"
});