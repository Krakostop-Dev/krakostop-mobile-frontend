import axios from 'axios';
import FormData from 'form-data';
import config from '../../../config/config';
import KsAxios from './KsAxios';
import ErrorMessages from '../ErrorMessages';

const apiPath = '/api/v1';

export const sendLocationToServer = location => {
  KsAxios.post(`${apiPath}/locations`, {
    lat: location.coords.latitude,
    lng: location.coords.longitude,
  });
  // TODO-ADD INDICATOR OF SERVER PROBLEM
};

export const getLatestParticipantLocationsFromServer = () => {
  return KsAxios.get(`${apiPath}/locations/latest`);
};

export async function sendEmailWithPairNr(email, pairNr) {
  let response;
  try {
    response = await axios.post(`${config.baseUrl}${apiPath}/login`, {
      email,
      pair_nr: pairNr,
    });
    if (response.status === 200) {
      return {
        status: 200,
        message: 'OK',
      };
    }
    return {
      status: 500,
      message: ErrorMessages.CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: ErrorMessages.WRONG_CREDENTIALS,
      };
    }
    return {
      status,
      message: ErrorMessages.CONNECTION_PROBLEM,
    };
  }
}

export async function sendEmailWithAuthCode(email, verificationCode) {
  let response;
  try {
    response = await axios.patch(`${config.baseUrl}${apiPath}/login`, {
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
      message: ErrorMessages.CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: ErrorMessages.WRONG_CODE,
      };
    }
    return {
      status,
      message: ErrorMessages.CONNECTION_PROBLEM,
    };
  }
}

export async function updateProfileOnServer({ avatar, msgLink, phoneNumber }) {
  if (!avatar && !msgLink && !phoneNumber) {
    console.log('EMPTY update');
    return { status: 200, message: 'OK' };
  }
  const data = new FormData();
  if (avatar) {
    data.append('avatar', {
      uri: avatar,
      type: 'image/jpg',
      name: 'avatar.jpg',
    });
  }
  if (msgLink) {
    data.append('messenger', msgLink);
  }
  if (phoneNumber) {
    data.append('phone', phoneNumber);
  }
  let response;
  try {
    response = await KsAxios.put(`${apiPath}/profile`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      processData: false,
      mimeType: 'multipart/form-data',
      contentType: false,
    });
    if (response.status === 200) {
      return {
        status: 200,
        user: response.data,
      };
    }
    return {
      status: 500,
      message: ErrorMessages.CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: ErrorMessages.NO_USER,
      };
    }
    return {
      status,
      message: ErrorMessages.CONNECTION_PROBLEM,
    };
  }
}
