import * as Google from 'expo-google-app-auth';
import axios from 'axios';
import config from '../../config/config';

const talkToBackend = async (accessUrl, token) => {
  try {
    const response = await axios.post(accessUrl, {
      token,
    });
    if (response.status === 200) {
      return 'good';
    }
    return 'null';
  } catch (e) {
    return e;
  }
};

export const googleSignIn = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: config.androidClientId,
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      const accessUrl = [config.baseUrl, 'api/v1/login'].join('');
      return await talkToBackend(accessUrl, result.idToken);
    }
    return { cancelled: true };
  } catch (e) {
    return { error: true };
  }
};
