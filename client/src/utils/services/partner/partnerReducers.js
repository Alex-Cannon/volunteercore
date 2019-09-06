export const partnerList = (partnerList = {
  options: {
    search: "",
    page: 1,
    per_page: 10
  }}, action) => {
  let newPartnerList = Object.assign({}, partnerList);

  switch(action.type) {
    case "SET_PARTNER_LIST_OPTIONS":
      newPartnerList.options = { ...newPartnerList.options, ...action.options };
      break;
    case "SET_PARTNER_LIST_RESULT":
      newPartnerList.result = action.result;
      newPartnerList.error = null;
      newPartnerList.loading = false;
      break;
    case "SET_PARTNER_LIST_ERROR":
      newPartnerList.result = action.result;
      newPartnerList.error = null;
      newPartnerList.loading = false;  
      break;
    case "PARTNER_LIST_LOADING":
      newPartnerList.result = null;
      newPartnerList.error = null;
      newPartnerList.loading = true;  
      break;
    default:
      break;
  }

  return newPartnerList;
}