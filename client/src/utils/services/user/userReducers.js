export const user = (user = {}, action) => {
  let newUser = Object.assign({}, user);

  switch(action.type) {
    case "SET_GET_USER_RESULT":
      newUser.result = action.result;
      newUser.error = null;
      newUser.loading = false;
      break;
    case "SET_GET_USER_ERROR":
      newUser.result = null;
      newUser.error = action.error;
      newUser.loading = false;
      break;
    case "GET_USER_LOADING":
      newUser.result = null;
      newUser.error = null;
      newUser.loading = true;
      break;
    default:
      break;
  }
};