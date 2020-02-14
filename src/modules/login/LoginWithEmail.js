import config from '../../../config/config';
import axios from 'axios';

export default async (email, pair_nr) => {
  try {
    const accessUrl = [config.baseUrl, 'api/v1/login'].join('');
    const response = await axios.post(accessUrl, {
      email,
      pair_nr,
    });
    //TODO: Check response status and uncomment console error
    if (response.status === 200) {
      console.log('RESPONSE DATA ' + response.data);
      return response.data;
    }
  } catch (e) {
    //console.error(e);
    return { error: e };
  }
};
