import * as Location from 'expo-location';

export const locationTrackerConfig = {
  accuracy: Location.Accuracy.Highest,
  timeInterval: 1000,
  distanceInterval: 0,
};

export const RACE_START_LOCATION = {
  coords: {
    altitude: 202.86534118652344,
    latitude: 50.06931414505046,
    longitude: 19.907399610903852,
    speed: -1,
  },
};
