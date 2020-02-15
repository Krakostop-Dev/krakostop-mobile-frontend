import * as Location from 'expo-location';
import checkPermissions from './ChekPermissions';
import { locationTrackerConfig, RACE_START_LOCATION } from './LocationConfig';

// TRACKS LOCATION ONLY WHEN APP IN THE FOREGROUND
const startTrackingLocation = async onNewLocation => {
  const permissions = await checkPermissions();
  if (permissions) {
    const location = await Location.watchPositionAsync(
      locationTrackerConfig,
      data => {
        onNewLocation(data);
      }
    );
    return location;
  }
  return onNewLocation(RACE_START_LOCATION);
};

export default startTrackingLocation;
