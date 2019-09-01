import axios from 'axios';

import { store } from '../../../redux/store';
import { loadingPartnerSearch, errorPartnerSearch, successPartnerSearch } from '../../../redux/actions';
const dispatch = store.dispatch;

export const getPartners = ({ search, page, per_page }) => {
  dispatch(loadingPartnerSearch());
  
  axios.get(`/api/partners?search=${search}&page=${page}&per_page=${per_page}`)
  .then(({ data }) => {
    dispatch(successPartnerSearch(data));
  })
  .catch(error => {
    dispatch(errorPartnerSearch(error));
  });
}

export default getPartners;
