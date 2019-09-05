/*
  Example Request Object:
  request: {
    result: Object
    loading: Boolean,
    error: Object
    formData: Object // Fields to be parsed & sent as request in query or body
  }
*/

export const opportunityList = (request, action) => {
  let newRequest = {};
  Object.assign(newRequest, request);

  switch(action.type) {
    case "OPPORTUNITY_LIST_SET_QUERY_DATA":
      console.log(newRequest);
      Object.assign(newRequest.queryData, action.queryData);
      console.log(newRequest);
      break;
    case  "OPPORTUNITY_LIST_RESULT":
      newRequest.result = action.result;
      newRequest.error = null;
      newRequest.loading = false;
      break;
    case "OPPORTUNITY_LIST_ERROR":
      newRequest.result = null;
      newRequest.error = action.error;
      newRequest.loading = false;
      break;
    case "OPPORTUNITY_LIST_LOADING":
      newRequest.result = null;
      newRequest.error = null;
      newRequest.loading = true;
      break;
    default:
    break;
  }

  return newRequest;
};


export const postOpportunityForm = (request, action) => {
  let newRequest = {};
  Object.assign(newRequest, request);
};

export const putOpportunityForm = (request, action) => {
  let newRequest = {};
  Object.assign(newRequest, request);

};
