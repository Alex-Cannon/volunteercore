import { combineReducers } from 'redux';

export const user = (user = { username: '', password: ''}, action) => {
  const newUser = {};
  Object.assign(newUser, user);
  switch (action.type) {
    case 'SET_USERNAME':
      newUser.username = action.value;
      break;
    case 'SET_PASSWORD':
      newUser.password = action.value;
      break;
    case 'AUTH_LOADING':
      newUser.loading = true;
      newUser.error = null;
      break;
    case 'AUTH_SUCCESS':
      newUser.data = action.data;
      newUser.loading = false;
      newUser.error = null;
      break;
    case 'AUTH_ERROR':
      newUser.error = action.error;
      newUser.loading = false;
      newUser.data = null;
      break;
    case 'SIGN_OUT':
      newUser.loading = false;
      newUser.data = null;
      newUser.error = null;
      break;
    default:
      break;
    }
  return newUser;
};

export const opportunites = (opportunities = {}, action) => {
  const newOpportunities = {};
  Object.assign(newOpportunities, opportunities);
  switch (action.type) {
    case 'LOADING_GET_OPPORTUNITIES':
      newOpportunities.loading = true;
      break;
    case 'ERROR_GET_OPPORTUNITIES':
      newOpportunities.error = action.error;
      newOpportunities.loading = false;
      newOpportunities.data = null;
      break;
    case 'SUCCESS_GET_OPPORTUNITIES':
      newOpportunities.data = action.data;
      newOpportunities.loading = false;
      newOpportunities.error = null;
      break;
    default:
      break;
  }
  return newOpportunities;
}

export const postOpportunities = (formData = {}, action) => {
  let newFormData = {};
  Object.assign(newFormData, formData);
  switch (action.type) {
    case 'LOADING_POST_OPPORTUNITY':
      newFormData.loading = true;
      break;
    case 'ERROR_POST_OPPORTUNITY':
      newFormData.error = action.error;
      newFormData.loading = false;
      newFormData.data = null;
      break;
    case 'SUCCESS_POST_OPPORTUNITY':
      newFormData.data = action.data;
      newFormData.loading = false;
      newFormData.error = null;
      break;
    default:
      break;
  }
  return newFormData;
}

// POST / PUT Partner
export const partnerForm = (formData = { data: {} }, action) => {
  let newFormData = {};
  Object.assign(newFormData, formData);

  switch (action.type) {
    case 'SET_PARTNER_FORM_FIELD':
      newFormData.data[action.field] = action.value;
      break;
    case 'LOADING_POST_PARTNER':
      newFormData.success = false;
      newFormData.error = null;
      newFormData.loading = true;
      break;
    case 'ERROR_POST_PARTNER':
      newFormData.success = false;
      newFormData.error = action.error;
      newFormData.loading = false;
      break;
    case 'SUCCESS_POST_PARTNER':
      newFormData.success = true;
      newFormData.error = null;
      newFormData.loading = false;
      break;
    case 'RESET_POST_PARTNER':
      newFormData = {};
      break;
    default:
      break;
  }
  return newFormData;
}

// GET Partners
export const partnerSearch = (partnerSearch = {
  options: {
    page: 1,
    per_page: 10,
    search: ''
  }}, action) => {
  const newPartnerSearch = {};
  Object.assign(newPartnerSearch, partnerSearch);
  
  switch (action.type) {
    case 'SET_PARTNER_SEARCH_FIELD':
      newPartnerSearch.options[action.field] = action.value;
      break;
    case 'LOADING_PARTNER_SEARCH':
      newPartnerSearch.success = false;
      newPartnerSearch.error = null;
      newPartnerSearch.loading = true;
      break;
    case 'ERROR_PARTNER_SEARCH':
      newPartnerSearch.success = false;
      newPartnerSearch.error = action.error;
      newPartnerSearch.loading = false;
      break;
    case 'SUCCESS_PARTNER_SEARCH':
      newPartnerSearch.data = action.data;
      newPartnerSearch.error = null;
      newPartnerSearch.loading = false;
      break;
    case 'SUCCESS_DELETE_PARTNER':
      if (!newPartnerSearch.data) return;
      newPartnerSearch.data.items = newPartnerSearch.data.items.filter(item => {
        return item.id !== action.id;
      });
      break;
    default:
      break;
  }
  return newPartnerSearch;
};

export const getPartner = (partnerData = {}, action) => {
  let newPartnerData = {};
  Object.assign(newPartnerData, partnerData);
  
  switch (action.type) {
    case 'LOADING_GET_PARTNER':
      newPartnerData.success = false;
      newPartnerData.error = null;
      newPartnerData.loading = true;
      break;
    case 'ERROR_GET_PARTNER':
      newPartnerData.success = false;
      newPartnerData.error = action.error;
      newPartnerData.loading = false;
      break;
    case 'SUCCESS_GET_PARTNER':
      newPartnerData.success = action.data;
      newPartnerData.error = null;
      newPartnerData.loading = false;
      break;
    case 'RESET_GET_PARTNER':
      newPartnerData = {};
      break;
    default:
      break;
  }
  return newPartnerData;
}

export const reducers = combineReducers({
  user,
  opportunites,
  postOpportunities,
  partnerForm,
  partnerSearch,
  getPartner
});