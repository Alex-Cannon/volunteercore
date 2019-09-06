import axios from 'axios';

import { store } from '../store';
import { getPartnerLoading, setGetPartnerError, setGetPartnerResult } from './partnerActions';
const dispatch = store.dispatch;

export const getPartner = (id, callback) => {
  dispatch(getPartnerLoading());

  axios.get(`/api/partners/${id}`)
    .then(({ data }) => {
      if (!callback) return dispatch(setGetPartnerResult(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(setGetPartnerError(error));
      callback(null, error);
    });
}

export default getPartner;