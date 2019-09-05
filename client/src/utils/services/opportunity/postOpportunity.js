import axios from 'axios';

import { store } from '../store';
import { loadingPostOpportunity, setResultPostOpportunity, setErrorPostOpportunity } from './opportunityActions';
const dispatch = store.dispatch;

export const postOpportunity = (data) => {
  const HEADERS = { headers: { Authorization: 'Bearer ' + this.props.token } };
  
  dispatch(loadingPostOpportunity);
  
  axios.post('/api/opportunities', data, HEADERS)
    .then(({ data }) => {
      dispatch(setResultPostOpportunity(data));
    })
    .catch(error => {
      dispatch(setErrorPostOpportunity(error));
    });
}

export default postOpportunity;