// POST Partner
export const setPostPartnerFormData = formData => ({
  type: "SET_PARTNER_LIST_QUERY_DATA",
  formData
});

export const setPostParterResult = result => ({
  type: "SET_POST_PARTNER_RESULT",
  result
});

export const setPostParterError = error => ({
  type: "SET_POST_PARTNER_ERROR",
  error
});

export const postParterLoading = () => ({
  type: "POST_PARTNER_LOADING"
});

// PUT Partner
/*export const setPartnerResult = result => ({
  type: "SET_PARTNER_RESULT",
  result
});

export const setPartnerError = error => ({
  type: "SET_PARTNER_ERROR",
  error
});

export const partnerLoading = () => ({
  type: "PARTNER_LOADING"
});*/


// GET Partners
export const setPartnerListQueryData = queryData => ({
  type: "SET_PARTNER_LIST_QUERY_DATA",
  queryData
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
export const setPartnerResult = result => ({
  type: "SET_PARTNER_RESULT",
  result
});

export const setPartnerError = error => ({
  type: "SET_PARTNER_ERROR",
  error
});

export const partnerLoading = () => ({
  type: "PARTNER_LOADING"
});

// Delete Partner
export const setPartnerDeleteResult = result => ({
  type: "SET_PARTNER_DELETE_RESULT",
  result
});

export const setPartnerDeleteError = error => ({
  type: "SET_PARTNER_DELETE_ERROR",
  error
});

export const partnerDeleteLoading = () => ({
  type: "PARTNER_DELETE_LOADING"
});