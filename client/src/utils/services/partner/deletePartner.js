import axios from 'axios';

import { store } from '../store';
import { setDeletePartnerError, setDeletePartnerResult } from './partnerActions';
const dispatch = store.dispatch;

export const deletePartner = (id, callback) => {
  axios.delete(`/api/partners/${id}`)
    .then(({ data }) => {
      if (!callback) return dispatch(setDeletePartnerResult(id));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(setDeletePartnerError(error));
      callback(null, error);
    }); 
}

export default deletePartner;