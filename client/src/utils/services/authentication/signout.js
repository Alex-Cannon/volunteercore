import axios from 'axios';

import { store } from '../store';
import { signOut as signOutAction } from './authActions';
const { dispatch } = store;

export const signOut = () => {
  axios.post('/api/auth/logout')
    .then(() => {
      dispatch(signOutAction());
    })
    .catch(({ message }) => {
      alert(`Sign Out Failed:\n${message}`);
    });
};
