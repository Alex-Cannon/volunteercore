import axios from 'axios';

import { store } from '../store';
import { setPutOpportunityResult, setPutOpportunityError, putOpportunityLoading } from './opportunityActions';
const dispatch = store.dispatch;

export const putOpportunity = (formData, callback) => {
  if (!callback) dispatch(putOpportunityLoading());

  console.log(formData);

  axios.put(`/api/opportunities/${formData.id}`, formData)
    .then(({ data }) => {
      if (!callback) return dispatch(setPutOpportunityResult(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(setPutOpportunityError(error));
      callback(null, error);
    });
}

export default putOpportunity;