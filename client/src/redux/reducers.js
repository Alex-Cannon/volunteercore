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
}

export const reducers = combineReducers({
  user
});