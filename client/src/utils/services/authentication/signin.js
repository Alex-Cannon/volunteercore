import axios from 'axios';

import { store } from '../store';
import { signInLoading, setSignInError, setSignInResult } from './authActions';
import { getUser } from '../user/getUser';
const { dispatch } = store;

export const signin = (username, password) => {
  const HEADERS = { headers: {
    Authorization: 'Basic ' + window.btoa(username + ':' + password)
  }};

  dispatch(signInLoading());

  // Create session
  axios.post('/api/auth/login', {}, HEADERS)
    .then(({ status, error }) => {
      if (status < 200 || status > 299) {
        dispatch(setSignInError(error));
      }

      // Retrieve user data
      getUser()
        .then(({ data }) => {
          dispatch(setSignInResult(data));
        })
        .catch((err) => {
          dispatch(setSignInError(err));
        });
    })
    .catch((err) => {
      dispatch(setSignInError(err));
    });
}
