import * as Location from 'expo-location';
import checkPermissions from './ChekPermissions';
import {
  KRAKOSTOP_BG_LOCATION_TASK,
  locationBgTrackingConfig,
  locationTrackerConfig,
  RACE_START_LOCATION,
} from './LocationConfig';

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

// TRACKS LOCATION WHEN APP IN CLOSED (IOS 500m+ distance difference)
export async function startTrackLocationInBackGround() {
  await checkPermissions();
  Location.hasStartedLocationUpdatesAsync(KRAKOSTOP_BG_LOCATION_TASK).then(
    locationTracked => {
      if (locationTracked !== true) {
        Location.startLocationUpdatesAsync(
          KRAKOSTOP_BG_LOCATION_TASK,
          locationBgTrackingConfig
        );
      }
    }
  );
}

export async function stopTrackLocationInBackGround() {
  Location.stopLocationUpdatesAsync(KRAKOSTOP_BG_LOCATION_TASK);
}
