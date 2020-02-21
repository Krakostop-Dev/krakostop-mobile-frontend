import KsAxios from './KsAxios';

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

export const updateUserProfileOnServer = (firstName, lastName) => {
  return KsAxios.put(`${apiPath}/profile`, {
    first_name: firstName,
    last_name: lastName,
  }).catch(error => console.error(error));
};
