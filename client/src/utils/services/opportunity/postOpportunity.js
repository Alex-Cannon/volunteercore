import axios from 'axios';

import { store } from '../store';
import { loadingPostOpportunity, setPostOpportunityResult, setPostOpportunityError } from './opportunityActions';
const dispatch = store.dispatch;

export const postOpportunity = (data) => {
  const HEADERS = { headers: { Authorization: 'Bearer ' + this.props.token } };
  
  dispatch(loadingPostOpportunity);
  
  axios.post('/api/opportunities', data, HEADERS)
    .then(({ data }) => {
      dispatch(setPostOpportunityResult(data));
    })
    .catch(error => {
      dispatch(setPostOpportunityError(error));
    });
}

export default postOpportunity;