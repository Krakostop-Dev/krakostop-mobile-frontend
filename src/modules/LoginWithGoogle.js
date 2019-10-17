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

export const googleSignIn = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: config.androidClientId,
      ioClientId: config.iosClientId,
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      const accessUrl = [config.baseUrl, 'api/v1/login'].join('');
      return await sendLogInRequestToBackend(accessUrl, result.idToken);
    }
    return { cancelled: true };
  } catch (e) {
    return { error: true };
  }
};
