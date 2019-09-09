export const opportunityList = (list = { queryData: {
  search: "",
  page: 1,
  per_page: 10
}}, action) => {
  let newList = Object.assign({}, list);

  switch(action.type) {
    case "OPPORTUNITY_LIST_SET_QUERY_DATA":
      newList.queryData = { ...newList.queryData, ...action.queryData };
      break;
    case  "SET_OPPORTUNITY_LIST_RESULT":
      newList.result = action.result;
      newList.error = null;
      newList.loading = false;
      break;
    case "SET_OPPORTUNITY_LIST_ERROR":
      newList.result = null;
      newList.error = action.error;
      newList.loading = false;
      break;
    case "OPPORTUNITY_LIST_LOADING":
      newList.result = null;
      newList.error = null;
      newList.loading = true;
      break;
    default:
    break;
  }

  return newList;
};

export const postOpportunityForm = (opportunity = { formData: {}}, action) => {
  let newOpportunity = Object.assign({}, opportunity);

  switch (action.type) {
    case "SET_POST_OPPORTUNITY_FORM_DATA":
      newOpportunity.formData = { ...newOpportunity.formData, ...action.formData };
      break;
    case "SET_POST_OPPORTUNITY_RESULT":
      newOpportunity.result = action.result;
      newOpportunity.error = null;
      newOpportunity.loading = false;
      break;
    case "SET_POST_OPPORTUNITY_ERROR":
      newOpportunity.result = null;
      newOpportunity.error = action.error;
      newOpportunity.loading = false; 
    break;
    case "POST_OPPORTUNITY_LOADING":
      newOpportunity.result = null;
      newOpportunity.error = null;
      newOpportunity.loading = true;
      break;
    default:
      break;
  }

  return newOpportunity;
};

export const putOpportunityForm = (opportunity = { formData: {}}, action) => {
  let newOpportunity = Object.assign({}, opportunity);

  switch (action.type) {
    case "SET_PUT_OPPORTUNITY_FORM_DATA":
      newOpportunity.formData = { ...newOpportunity.formData, ...action.formData };
      break;
    case "SET_PUT_OPPORTUNITY_RESULT":
      newOpportunity.result = action.result;
      newOpportunity.error = null;
      newOpportunity.loading = false;
      break;
    case "SET_PUT_OPPORTUNITY_ERROR":
      newOpportunity.result = null;
      newOpportunity.error = action.error;
      newOpportunity.loading = false; 
    break;
    case "PUT_OPPORTUNITY_LOADING":
      newOpportunity.result = null;
      newOpportunity.error = null;
      newOpportunity.loading = true;
      break;
    default:
      break;
  }

  return newOpportunity;
};