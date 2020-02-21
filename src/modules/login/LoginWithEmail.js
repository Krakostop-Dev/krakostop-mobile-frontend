import axios from 'axios';
import config from '../../../config/config';

export default async (email, pairNr) => {
  try {
    const accessUrl = [config.baseUrl, 'api/v1/login'].join('');
    const response = await axios.post(accessUrl, {
      email,
      pair_nr: pairNr,
    });
    // TODO: Check response status and uncomment console error
    if (response.status === 200) {
      console.log(`RESPONSE DATA ${response.data}`);
      return response.data;
    }
    return null;
  } catch (e) {
    // console.error(e);
    return { error: e };
  }
};
