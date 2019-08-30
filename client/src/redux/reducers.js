import { combineReducers } from 'redux';

export const user = (state = {}, action) => {
  const newUser = {};
  Object.assign(newUser, state);
  switch (action.type) {
    case 'SET_USERNAME':
      newUser.username = action.value;
      break;
    case 'SET_PASSWORD':
      newUser.passsword = action.value;
      break;
    default:
      break;
  }
  return newUser;
};

export const reducers = combineReducers({
  user,
});