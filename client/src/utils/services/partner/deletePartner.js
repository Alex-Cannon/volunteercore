import axios from 'axios';

import { store } from '../store';
import { setPartnerListResult, setDeletePartnerError, setDeletePartnerResult, deletePartnerLoading } from './partnerActions';
const dispatch = store.dispatch;

export const deletePartner = (id, callback) => {
  let partnerList = Object.assign({}, store.getState().partnerList.result);
  deletePartnerLoading();

  axios.delete(`/api/partners/${id}`)
    .then(({ data }) => {
      if (!callback) {
        dispatch(setDeletePartnerResult(id));
        partnerList.items = partnerList.items.filter(item => {
          return item.id !== id;
        });
        dispatch(setPartnerListResult(partnerList));
        return;
      }
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(setDeletePartnerError(error));
      callback(null, error);
    }); 
}

export default deletePartner;