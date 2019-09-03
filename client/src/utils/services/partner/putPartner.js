import axios from 'axios';

import { store } from '../../../redux/store';
import { loadingPostPartner, successPostPartner, errorPostPartner } from '../../../redux/actions';
const dispatch = store.dispatch;

export const putPartner = (data) => {
  dispatch(loadingPostPartner());

  axios.put(`/api/partners/${data.id}`, data)
    .then(() => {
      dispatch(successPostPartner())
    })
    .catch(error => {
      dispatch(errorPostPartner(error));
    });
}

export default putPartner;