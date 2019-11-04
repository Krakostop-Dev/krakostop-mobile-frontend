import React, { useEffect, useContext, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Spinner } from 'native-base';
import { Avatar } from 'react-native-elements';
import { MapContext } from './context/MapContext';
import { ksBasic } from '../styles/basic/ksBasic';

const INIT_LATITUDE_DELTA = 0.0922;
const INIT_LONGITUDE_DELTA = 0.0421;

const MapComponent = () => {
  const context = useContext(MapContext);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 50,
  });
  const [isLocationLoaded, loadLocation] = useState(false);

  useEffect(() => {
    const _getLocationAsync = async () => {
      if (!context.isMapPermissionsGranted) {
        await context.grantMapPermissions();
      }
      const location = await Location.getCurrentPositionAsync({});

      setLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });
      loadLocation(true);

      await context.updateMyLocation(location);
    };

    _getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      {isLocationLoaded ? (
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: INIT_LATITUDE_DELTA,
            longitudeDelta: INIT_LONGITUDE_DELTA,
          }}
        />
      ) : (
        <Spinner color="red" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ksBasic.stackContainer,
    alignItems: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapComponent;
