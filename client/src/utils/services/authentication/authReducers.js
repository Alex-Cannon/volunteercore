export const user = (user = { formData: {} }, action) => {
  let newUser = Object.assign({}, user);

  switch(action.type) {
    case 'SET_SIGN_IN_FORM_DATA':
      newUser.formData = { ...newUser.formData, ...action.formData };
      break;
    case 'SET_SIGN_IN_RESULT':
      newUser.result = action.result;
      newUser.error = null;
      newUser.loading = false;
      break;
    case 'SET_SIGN_IN_ERROR':
      newUser.result = null;
      newUser.error = action.error;
      newUser.loading = false;  
      break;
    case 'SIGN_IN_LOADING':
      newUser.loading = true;  
      break;
    case 'SIGN_OUT':
      newUser = {};
      break;
    default:
      break;
  }

  return newUser;
}