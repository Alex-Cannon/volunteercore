import axios from '../../helpers/axios';

export default (id, callback) => {
  axios.get("/api/opportunities/1")
    .then(({ data }) => {
      callback(data, null);
    })
    .catch(error => {
      callback(null, error);
    });
}