import axios from 'axios';

import { store } from '../../../redux/store';
import { authLoading, authError, authSuccess } from '../../../redux/actions';
import { getUser } from '../user/getUser';
const { dispatch } = store;

export const signin = (username, password, e) => {
  if (e) e.preventDefault();
  const Authorization = 'Basic ' + window.btoa(username + ':' + password);

  dispatch(authLoading());

  // Create session
  axios.post('/api/auth/login', {}, { headers: { Authorization }})
    .then(({ status, error }) => {
      if (status < 200 || status > 299) {
        dispatch(authError(error));
      }

      // Retrieve user data
      getUser()
        .then(({ data }) => {
          dispatch(authSuccess(data));
        })
        .catch((err) => {
          dispatch(authError(err));
        });
    })
    .catch((err) => {
      dispatch(authError(err));
    });
}
