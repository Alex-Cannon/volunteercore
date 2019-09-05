export const user = (user = { formData: {} }, action) => {
  let newAuth = Object.assign({}, user);

  switch(action.type) {
    case 'SET_SIGN_IN_FORM_DATA':
      if (!action.formData || typeof action.formData !== Object) return newAuth;
      console.log(newAuth.formData);
      newAuth.formData = Object.assign(newAuth.formData, action.formData);
      console.log(newAuth.formData);
      break;
    case 'SET_SIGN_IN_RESULT':
      newAuth.result = action.result;
      newAuth.error = null;
      newAuth.loading = false;
      break;
    case 'SET_SIGN_IN_ERROR':
      newAuth.result = null;
      newAuth.error = action.error;
      newAuth.loading = false;  
      break;
    case 'SIGN_IN_LOADING':
      newAuth.loading = true;  
      break;
    case 'SIGN_OUT':
      newAuth = {};
      break;
    default:
      break;
  }

  return newAuth;
}