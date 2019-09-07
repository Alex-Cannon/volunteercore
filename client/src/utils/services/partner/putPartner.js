import axios from 'axios';

import { store } from '..//store';
import { putPartnerLoading, setPutPartnerResult, setPutPartnerError } from './partnerActions';
const dispatch = store.dispatch;

export const putPartner = (data, callback) => {
  dispatch(putPartnerLoading());

  axios.put(`/api/partners/${data.id}`, data)
    .then(({ data }) => {
      if (!callback) return dispatch(setPutPartnerResult(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(setPutPartnerError(error));
      callback(null, error);
    });
}

export default putPartner;