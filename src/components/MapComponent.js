import React, { useEffect, useContext, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Spinner } from 'native-base';
import { Avatar } from 'react-native-elements';
import { MapContext } from './context/MapContext';
import { ksBasic } from '../styles/basic/ksBasic';
import { AppContext } from './context/AppContext';

const INIT_LATITUDE_DELTA = 0.0922;
const INIT_LONGITUDE_DELTA = 0.0421;

const MapComponent = () => {
  const appContext = useContext(AppContext);
  const { user } = appContext;
  const mapContext = useContext(MapContext);
  const [isLocationUpdated, setUpdateLocationStatus] = useState(false);

  useEffect(() => {
    const updateLocation = async () => {
      await mapContext.updateMyLocation();
      setUpdateLocationStatus(true);
    };
    updateLocation();
  }, []);

  return (
    <View style={styles.container}>
      {isLocationUpdated ? (
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: mapContext.my_location.coords.latitude,
            longitude: mapContext.my_location.coords.longitude,
            latitudeDelta: INIT_LATITUDE_DELTA,
            longitudeDelta: INIT_LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: mapContext.my_location.coords.latitude,
              longitude: mapContext.my_location.coords.longitude
            }}
            onPress={console.log('Marker works')}
          >
            <Avatar
              size="medium"
              rounded
              source={user.avatar}
              activeOpacity={0.7}
            />
          </Marker>
        </MapView>
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
