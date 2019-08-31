import axios from 'axios';

import { store } from '../../../redux/store';
import { loadingGetOpportunities, errorGetOpportunities, successGetOpportunities } from '../../../redux/actions';
const { dispatch } = store;

export const getOpportunities = ({ query, page, per_page}) => {
  dispatch(loadingGetOpportunities());
  axios.get(`/api/opportunities?search=${query}&page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      dispatch(successGetOpportunities(data));
    })
    .catch(error => {
      dispatch(errorGetOpportunities(error));
    });
}