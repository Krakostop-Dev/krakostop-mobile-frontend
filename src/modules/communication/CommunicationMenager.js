import axios from 'axios';
import FormData from 'form-data';
import config from '../../../config/config';
import KsAxios from './KsAxios';
import Messages from '../Messages';

const apiPath = '/api/v1';

export const sendLocationToServer = location => {
  KsAxios.post(`${apiPath}/locations`, {
    lat: location.coords.latitude,
    lng: location.coords.longitude,
  });
  // TODO-ADD INDICATOR OF SERVER PROBLEM
};

function addRankingPositionToEachPair(pairs) {
  const pairsWithRanking = pairs.map((pair, index) => ({
    ...pair,
    ranking: index + 1,
  }));
  return pairsWithRanking;
}

export async function getLatestParticipantLocationsFromServer() {
  const response = await KsAxios.get(`${apiPath}/locations/latest`);
  return addRankingPositionToEachPair(response.data);
}

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
      message: Messages.CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: Messages.WRONG_CREDENTIALS,
      };
    }
    return {
      status,
      message: Messages.CONNECTION_PROBLEM,
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
      message: Messages.CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: Messages.WRONG_CODE,
      };
    }
    return {
      status,
      message: Messages.CONNECTION_PROBLEM,
    };
  }
}

export async function updateProfileOnServer({
  avatar,
  fbProfileLink,
  msgLink,
  phoneNumber,
  isPhoneEnabled,
}) {
  if (!avatar && !msgLink && !phoneNumber && isPhoneEnabled === undefined) {
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
  if (msgLink && fbProfileLink) {
    data.append('facebook', fbProfileLink);
    data.append('messenger', msgLink);
  }
  if (phoneNumber) {
    data.append('phone', phoneNumber);
  }
  if (isPhoneEnabled !== undefined) {
    data.append('is_phone_enabled', isPhoneEnabled);
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
      message: Messages.CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: Messages.NO_USER,
      };
    }
    return {
      status,
      message: Messages.CONNECTION_PROBLEM,
    };
  }
}
