import axios from 'services/local/api';

// endpoint
import { getUsersEp } from 'services/local/endpoints';

const getUsers = async () => {
  const res = await axios.get(getUsersEp);
  return res;
};

export default getUsers;
