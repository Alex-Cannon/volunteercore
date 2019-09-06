export const setUserData = data => ({
  type: "SET_USER_DATA",
  data
});

export const getUserLoading = () => ({
  type: "GET_USER_LOADING"
});

export const setGetUserResult = result => ({
  type: "SET_GET_USER_RESULT",
  result
});

export const setGetUserError = error => ({
  type: "SET_GET_USER_ERROR",
  error
});
