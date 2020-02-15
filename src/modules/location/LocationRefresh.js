import * as Location from 'expo-location';
import checkPermissions from './ChekPermissions';
import { RACE_START_LOCATION } from './LocationConfig';

const refreshCurrentPosition = async (askForPermissionIfNotGranted = true) => {
  const permissions = await checkPermissions(askForPermissionIfNotGranted);
  if (permissions) {
    const location = await Location.getCurrentPositionAsync({});
    return location;
  }
  return RACE_START_LOCATION;
};

export default refreshCurrentPosition;
