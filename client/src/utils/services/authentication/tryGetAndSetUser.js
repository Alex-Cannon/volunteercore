import getUser from '../user/getUser';

import { getUserLoading, setGetUserResult, setGetUserError } from '../user/userActions';
import { store } from '../store';
const dispatch = store.dispatch;

export default (callback) => {
  getUser()
    .then(res => {
      if (callback) return callback(res, null);

    })
    .catch(error => {
      if (callback) return callback(error, null);

    });
};