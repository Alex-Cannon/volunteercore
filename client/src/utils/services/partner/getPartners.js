import axios from 'axios';

import { store } from '../store';
import { partnerListLoading, setPartnerListError, setPartnerListResult } from './partnerActions';
const dispatch = store.dispatch;

export const getPartners = ({ search, page, per_page }) => {
  dispatch(partnerListLoading());
  
  axios.get(`/api/partners?search=${search}&page=${page}&per_page=${per_page}`)
  .then(({ data }) => {
    dispatch(setPartnerListResult(data));
  })
  .catch(error => {
    dispatch(setPartnerListError(error));
  });
}

export default getPartners;
