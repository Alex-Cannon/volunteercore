export const setSignInFormData = formData => ({
  type: "SET_SIGN_IN_FORM_DATA",
  formData
});

export const setSignInResult = result => ({
  type: "SET_SIGN_IN_RESULT",
  result
});

export const setSignInError = error => ({
  type: "SET_SIGN_IN_ERROR",
  error
});

export const signInLoading = () => ({
  type: "SIGN_IN_LOADING"
});

export const signOut = () => ({
  type: "SIGN_OUT"
})