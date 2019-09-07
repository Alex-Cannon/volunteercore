import { createStore, combineReducers } from 'redux';

import { user } from './authentication/authReducers';
import { opportunityList } from './opportunity/opportunityReducers';
import { partnerList, postPartnerForm, putPartnerForm, getPartner, deletePartner } from './partner/partnerReducers';

export const reducers = combineReducers({
  user,
  opportunityList,
  postPartnerForm,
  getPartner,
  partnerList,
  putPartnerForm,
  deletePartner
});

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();