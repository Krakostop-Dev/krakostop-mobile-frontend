import checkPermissions from "./ChekPermissions";
import * as Location from "expo-location";
import {RACE_START_LOCATION} from "./LocationConfig";

export const refreshCurrentPosition = async (askForPermissionIfNotGranted = true) => {
  return await checkPermissions(askForPermissionIfNotGranted)
    ? await Location.getCurrentPositionAsync({}) : RACE_START_LOCATION;
};



