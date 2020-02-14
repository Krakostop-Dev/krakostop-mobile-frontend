import * as Google from 'expo-google-app-auth';
import axios from 'axios';
import config from '../../config/config';

const sendLogInRequestToBackend = async (accessUrl, token) => {
  const response = await axios.post(accessUrl, {
    token,
  });
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export default async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: config.androidClientId,
      iosClientId: config.iosClientId,
      scopes: ['profile', 'email'],
    });
    console.log('Config base url: ' + config.baseUrl);
    if (result.type === 'success') {
      const accessUrl = [config.baseUrl, 'api/v1/login'].join('');
      return await sendLogInRequestToBackend(accessUrl, result.idToken);
    }
    console.error('Problem with google auth');
    return { error: true };
  } catch (e) {
    console.error(e);
    return { error: true };
  }
};
