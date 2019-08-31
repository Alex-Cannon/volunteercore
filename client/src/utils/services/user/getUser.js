import axios from 'axios';

// Gets *current* user in session according to server
//
export const getUser = async () => {
  try {
    let res = await axios.get('/api/users/authenticated_user');
    return res;
  } catch (error) {
    return { error };
  }
}