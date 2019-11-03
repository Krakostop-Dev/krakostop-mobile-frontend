import React, { useEffect, useContext, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { MapContext } from './context/MapContext';
import { KsLabel } from './ksLabel/KsLabel';

const MapComponent = () => {
  const context = useContext(MapContext);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 50,
  });
  const [isLocationLoaded, loadLocation] = useState(false);
  useEffect(() => {
    const _getLocationAsync = async () => {
        console.log(context.isMapPermissionsGranted);
       if(!context.isMapPermissionsGranted) {
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
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ) : (
        <KsLabel labelText="loading" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapComponent;
