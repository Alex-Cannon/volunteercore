import axios from 'axios';

if (process.env.NODE_ENV === 'TEST') {
  console.log('Testing...');
  axios.defaults.baseURL = "http://localhost:5000/";
}

export default axios;