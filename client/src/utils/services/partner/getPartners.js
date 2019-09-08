import axios from 'axios';

import { store } from '../store';
import { partnerListLoading, setPartnerListError, setPartnerListResult } from './partnerActions';
const dispatch = store.dispatch;

export const getPartners = ({ search, page, per_page }, callback) => {
  if (!callback) dispatch(partnerListLoading());
  
  axios.get(`/api/partners?search=${search}&page=${page}&per_page=${per_page}`)
  .then(({ data }) => {
    if (!callback) return dispatch(setPartnerListResult(data));
    callback(data, null);
  })
  .catch(error => {
    if (!callback) return dispatch(setPartnerListError(error));
    callback(null, error);
  });
}

export default getPartners;
