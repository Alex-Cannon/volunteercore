/*
  Example List Object:
  list: {
    result: Object
    loading: Boolean,
    error: Object
    formData: Object // Fields to be parsed & sent as list in query or body
  }
*/

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


export const postOpportunityForm = (list, action) => {
  let newList = {};
  Object.assign(newList, list);
};

export const putOpportunityForm = (list, action) => {
  let newList = {};
  Object.assign(newList, list);

};
