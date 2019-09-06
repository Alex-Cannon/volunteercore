import axios from 'axios';

import { store } from '../store';
import { postPartnerLoading, setPostPartnerResult, setPostPartnerError } from './partnerActions';
const dispatch = store.dispatch;

export const postPartner = (data) => {
  dispatch(postPartnerLoading());

  axios.post('/api/partners', data)
    .then(() => {
      dispatch(setPostPartnerResult())
    })
    .catch(error => {
      dispatch(setPostPartnerError(error));
    });
}

export default postPartner;