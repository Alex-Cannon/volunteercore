import { createStore, combineReducers } from 'redux';

import { opportunityList } from './opportunity/opportunityReducers';
import { user } from './authentication/authReducers';

export const reducers = combineReducers({
  user,
  opportunityList
});

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();