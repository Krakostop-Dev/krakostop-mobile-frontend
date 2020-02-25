import axios from 'axios';
import config from '../../../config/config';

const WRONG_CREDENTIALS_MESSAGE = 'Wprowadzony kod jest niepoprawny ';
const CONNECTION_PROBLEM =
  'Wystąpił problem z połączeniem. Spróbuj ponownie później.';

async function authenticateUser(email, verificationCode) {
  let response;
  try {
    const accessUrl = [config.baseUrl, 'api/v1/login'].join('');
    response = await axios.patch(accessUrl, {
      email,
      verification_code: verificationCode,
    });

    if (response.status === 200) {
      return {
        status: 200,
        data: response.data,
      };
    }
    return {
      status: 500,
      message: CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: WRONG_CREDENTIALS_MESSAGE,
      };
    }
    return {
      status,
      message: CONNECTION_PROBLEM,
    };
  }
}

export default authenticateUser;
