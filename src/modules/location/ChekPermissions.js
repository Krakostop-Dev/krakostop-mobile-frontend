import * as Permissions from "expo-permissions";

const checkPermissions = async (askIfNotGrander = true) => {
  const {status: currentStatus} = await Permissions.getAsync(Permissions.LOCATION);
  if (currentStatus !== 'granted') {
    return askIfNotGrander ? await askForLocationPermissions() : false
  }
  return true;
};

export const askForLocationPermissions = async () => {
  let {status: askedStatus} = await Permissions.askAsync(Permissions.LOCATION);
  if (askedStatus !== 'granted') {
    alert('Hej! Aplikacja nie bedzie działać poprawnie bez dostępu do lokalizacji');
    return false;
  }
  return true
};

export default checkPermissions;
