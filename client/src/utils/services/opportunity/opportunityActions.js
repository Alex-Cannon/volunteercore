// GET Opportunities
export const setOpportunityListQueryData = queryData => ({
  type: "SET_OPPORTUNITY_LIST_QUERY_DATA",
  queryData
});

export const setOpportunityListResult = result => ({
  type: "SET_OPPORTUNITY_LIST_RESULT",
  result
});

export const setOpportunityListError = error => ({
  type: "SET_OPPORTUNITY_LIST_ERROR",
  error
});

export const loadingOpportunityList = () => ({
  type: "OPPORUTNITY_LIST_LOADING"
})

// POST Opportunity
export const setPostOpportunityFormData = formData => ({
  type: "SET_POST_OPPORTUNITY_FORM_DATA",
  formData
});

export const setPostOpportunityResult = result => ({
  type: "SET_POST_OPPORTUNITY_RESULT",
  result
});

export const setPostOpportunityError = error => ({
  type: "SET_POST_OPPORTUNITY_ERROR",
  error
});

export const loadingPostOpportunity = () => ({
  type: "LOADING_POST_OPPORTUNITY"
});

// PUT Opportunity
export const setPutOpportunityFormData = formData => ({
  type: "SET_PUT_OPPORTUNITY_FORM_DATA",
  formData
});

export const setPutOpportunityResult = result => ({
  type: "SET_PUT_OPPORTUNITY_RESULT",
  result
});

export const setPutOpportunityError = error => ({
  type: "SET_PUT_OPPORTUNITY_ERROR",
  error
});

export const putOpportunityLoading = () => ({
  type: "PUT_OPPORTUNITY_LOADING"
});
