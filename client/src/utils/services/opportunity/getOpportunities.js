import axios from 'axios';

import { store } from '../store';
import { loadingOpportunityList, setOpportunityListError, setOpportunityListResult } from './opportunityActions';
const { dispatch } = store;

export const getOpportunities = ({ search, page, per_page}) => {
  dispatch(loadingOpportunityList());

  axios.get(`/api/opportunities?search=${search}&page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      dispatch(setOpportunityListResult(data));
    })
    .catch(error => {
      dispatch(setOpportunityListError(error));
    });
}