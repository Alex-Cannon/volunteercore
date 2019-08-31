import axios from 'axios';

//import history from '../../helpers/history';

import { store } from '../../../redux/store';
import { signOut as signOutAction } from '../../../redux/actions';
const { dispatch } = store;

export const signOut = () => {
  axios.post('/api/auth/logout')
    .then(() => {
      dispatch(signOutAction());
      //history.push('/');
    })
    .catch(({ message }) => {
      alert(`Sign Out Failed:\n${message}`);
    });
};
