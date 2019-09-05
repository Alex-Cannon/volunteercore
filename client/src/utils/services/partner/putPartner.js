import axios from 'axios';

import { store } from '..//store';
import { loadingPostPartner, successPostPartner, errorPostPartner } from './partnerActions';
const dispatch = store.dispatch;

export const putPartner = (data, callback) => {
  dispatch(loadingPostPartner());

  axios.put(`/api/partners/${data.id}`, data)
    .then(({ data }) => {
      if (!callback) return dispatch(successPostPartner());
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(errorPostPartner(error));
      callback(null, error);
    });
}

export default putPartner;