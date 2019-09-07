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

export const postPartnerForm = (partner = {}, action) => {
  let newPartner = Object.assign({}, partner);

  switch(action.type) {
    case "SET_POST_PARTNER_FORM_DATA":
      newPartner.formData = {...newPartner.formData, ...action.formData};
      break;
    case "SET_POST_PARTNER_RESULT":
      newPartner.result = action.result;
      newPartner.error = null;
      newPartner.loading = false;
      break;
    case "SET_POST_PARTNER_ERROR":
      newPartner.result = null;
      newPartner.error = action.error;
      newPartner.loading = false;  
      break;
    case "POST_PARTNER_LOADING":
      newPartner.result = null;
      newPartner.error = null;
      newPartner.loading = true;    
      break;
    default:
      break;
  }

  return newPartner;
}

export const putPartnerForm = (putPartner = {}, action) => {
  let newPutPartner = Object.assign({}, putPartner);

  switch(action.type) {
    case "SET_PUT_PARTNER_FORM_DATA":
      newPutPartner.formData = { ...newPutPartner.formData, ...action.formData };
      break;
    case "SET_PUT_PARTNER_RESULT":
      newPutPartner.result = action.result;
      newPutPartner.error = null;
      newPutPartner.loading = false;
      break;
    case "SET_PUT_PARTNER_ERROR":
      newPutPartner.result = null;
      newPutPartner.error = action.error;
      newPutPartner.loading = false;
      break;
    case "PUT_PARTNER_LOADING":
      newPutPartner.result = null
      newPutPartner.error = null;
      newPutPartner.loading = true;    
      break;
    default:
      break;
  }

  return newPutPartner;
};

export const getPartner = (partner = {}, action) => {
  let newPartner = Object.assign({}, partner);

  switch (action.type) {
    case "SET_GET_PARTNER_RESULT":
      newPartner.result = action.result;
      newPartner.error = null;
      newPartner.loading = false;
      break;
    case "SET_GET_PARTNER_ERROR":
      newPartner.result = null;
      newPartner.error = action.error;
      newPartner.loading = false;
      break;
    case "GET_PARTNER_LOADING":
      newPartner.result = null
      newPartner.error = null;
      newPartner.loading = true;      
      break;
    default:
      break;
  }

  return newPartner;
};