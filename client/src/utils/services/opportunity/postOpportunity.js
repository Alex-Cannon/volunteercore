import axios from 'axios';

import { store } from '../../../redux/store';
import { loadingPostOpportunity, successPostOpportunity, errorPostOpportunity } from '../../../redux/actions';
const dispatch = store.dispatch;

export const postOpportunity = (data) => {
  const HEADERS = { headers: { Authorization: 'Bearer ' + this.props.token } };
  
  dispatch(loadingPostOpportunity);
  
  axios.post('/api/opportunities', data, HEADERS)
    .then(({ data }) => {
      dispatch(successPostOpportunity(data));
    })
    .catch(error => {
      dispatch(errorPostOpportunity(error));
    });
}