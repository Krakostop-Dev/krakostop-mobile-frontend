import * as Permissions from 'expo-permissions';

export const askForLocationPermissions = async () => {
  const { status: askedStatus } = await Permissions.askAsync(
    Permissions.LOCATION
  );
  if (askedStatus !== 'granted') {
    // eslint-disable-next-line no-undef
    alert(
      'Hej! Aplikacja nie bedzie działać poprawnie bez dostępu do lokalizacji'
    );
    return false;
  }
  return true;
};

const checkPermissions = async (askIfNotGrander = true) => {
  const { status: currentStatus } = await Permissions.getAsync(
    Permissions.LOCATION
  );
  if (currentStatus !== 'granted') {
    if (askIfNotGrander) {
      const permissions = await askForLocationPermissions();
      return permissions;
    }
    return false;
  }
  return true;
};

export default checkPermissions;
