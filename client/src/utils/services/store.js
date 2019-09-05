import { createStore, combineReducers } from 'redux';

import { user } from './authentication/authReducers';
import { opportunityList } from './opportunity/opportunityReducers';
import { partnerList } from './partner/partnerReducers';

export const reducers = combineReducers({
  user,
  opportunityList,
  partnerList
});

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();