import * as Location from 'expo-location';
import checkPermissions from "./ChekPermissions";
import {locationTrackerConfig, RACE_START_LOCATION} from "./LocationConfig";

//TRACKS LOCATION ONLY WHEN APP IN THE FOREGROUND
export const startTrackingLocation = async (onNewLocation) => {
    if (await checkPermissions()) {
      return await Location.watchPositionAsync(locationTrackerConfig,
        data => {
          onNewLocation(data);
        }
      )
    } else {
      onNewLocation(RACE_START_LOCATION)
    }
  }
;



