import axios from 'axios';

import { store } from '../store';
import { setPutOpportunityResult, setPutOpportunityError, putOpportunityLoading } from './opportunityActions';
const dispatch = store.dispatch;

export const putOpportunity = (formData, callback) => {
  if (!callback) dispatch(putOpportunityLoading());

  axios.put(`/api/opportunities/${formData.id}`)
    .then(({ data }) => {
      if (!callback) dispatch(setPutOpportunityResult(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) dispatch(setPutOpportunityError(error));
      callback(null, error);
    });
}

export default putOpportunity;