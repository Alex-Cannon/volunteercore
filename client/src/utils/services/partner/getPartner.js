import axios from 'axios';

import { store } from '../../../redux/store';
import { loadingGetPartner, errorGetPartner, successGetPartner } from '../../../redux/actions';
const dispatch = store.dispatch;

export const getPartner = (id, callback = ()=>{}) => {
  dispatch(loadingGetPartner());

  axios.get(`/api/partners/${id}`)
    .then(({ data }) => {
      if (!callback) dispatch(successGetPartner(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) dispatch(errorGetPartner(error));
      callback(null, error);
    });
}

export default getPartner;