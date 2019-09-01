import axios from 'axios';

import { store } from '../../../redux/store';
import { loadingPostPartner, successPostPartner, errorPostPartner } from '../../../redux/actions';
const dispatch = store.dispatch;

export const postPartner = (data) => {
  dispatch(loadingPostPartner());

  axios.post('/api/partners', data)
    .then(res => {
      dispatch(successPostPartner())
    })
    .catch(error => {
      dispatch(errorPostPartner(error));
    });
}

export default postPartner;