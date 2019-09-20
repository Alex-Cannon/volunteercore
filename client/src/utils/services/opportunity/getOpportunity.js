import axios from '../../helpers/axios';

export default (id) => {
  return axios.get(`/api/opportunities/${id}`);
}