import axios from 'axios';

import { store } from '../store';
import { loadingGetPartner, errorGetPartner, successGetPartner } from './partnerActions';
const dispatch = store.dispatch;

export const getPartner = (id, callback) => {
  dispatch(loadingGetPartner());

  axios.get(`/api/partners/${id}`)
    .then(({ data }) => {
      if (!callback) return dispatch(successGetPartner(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(errorGetPartner(error));
      callback(null, error);
    });
}

export default getPartner;