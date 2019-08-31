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
    default:
      break;
    }
  return newUser;
};

export const reducers = combineReducers({
  user
});