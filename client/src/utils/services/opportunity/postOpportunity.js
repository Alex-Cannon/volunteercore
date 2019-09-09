import axios from 'axios';

import { store } from '../store';
import { loadingPostOpportunity, setPostOpportunityResult, setPostOpportunityError } from './opportunityActions';
const dispatch = store.dispatch;

export const postOpportunity = (data) => {  
  dispatch(loadingPostOpportunity());
  
  axios.post('/api/opportunities', data)
    .then(({ data }) => {
      dispatch(setPostOpportunityResult(data));
    })
    .catch(error => {
      dispatch(setPostOpportunityError(error));
    });
}

export default postOpportunity;