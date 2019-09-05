import axios from 'axios';

import { store } from '../store';
import { errorDeletePartner, successDeletePartner } from './partnerActions';
const dispatch = store.dispatch;

export const deletePartner = (id, callback) => {
  axios.delete(`/api/partners/${id}`)
    .then(({ data }) => {
      if (!callback) return dispatch(successDeletePartner(id));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(errorDeletePartner(error));
      callback(null, error);
    }); 
}

export default deletePartner;