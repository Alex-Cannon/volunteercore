import axios from 'axios';

import { store } from '../store';
import { loadingPostPartner, successPostPartner, errorPostPartner } from './partnerActions';
const dispatch = store.dispatch;

export const postPartner = (data) => {
  dispatch(loadingPostPartner());

  axios.post('/api/partners', data)
    .then(() => {
      dispatch(successPostPartner())
    })
    .catch(error => {
      dispatch(errorPostPartner(error));
    });
}

export default postPartner;