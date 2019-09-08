import axios from 'axios';

import { store } from '../store';
import { loadingOpportunityList, setOpportunityListError, setOpportunityListResult } from './opportunityActions';
const { dispatch } = store;

export const getOpportunities = ({ search, page, per_page}, callback) => {
  if (!callback) dispatch(loadingOpportunityList());

  axios.get(`/api/opportunities?search=${search}&page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      if (!callback) return dispatch(setOpportunityListResult(data));
      callback(data, null);
    })
    .catch(error => {
      if (!callback) return dispatch(setOpportunityListError(error));
      callback(null, error);
    });
}