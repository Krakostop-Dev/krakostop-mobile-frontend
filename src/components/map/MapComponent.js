import MapView from 'react-native-maps';
import React, { useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { MapContext } from '../context/MapContext';
import AppUserMarker from './AppUserMarker';
import ParticipantMarker from './PatricipantMarker';

const INIT_LATITUDE_DELTA = 0.0922;
const INIT_LONGITUDE_DELTA = 0.0421;

const MapComponent = () => {
  const mapContext = useContext(MapContext);
  const { participants } = mapContext;
  const initialRegion = {
    latitude: mapContext.my_location.coords.latitude,
    longitude: mapContext.my_location.coords.longitude,
    latitudeDelta: INIT_LATITUDE_DELTA,
    longitudeDelta: INIT_LONGITUDE_DELTA,
  };
  return (
    <MapView style={styles.mapStyle} initialRegion={initialRegion}>
      <AppUserMarker />
      {participants.map(participant => (
        <ParticipantMarker
          participant={participant}
          key={participant.user_id}
        />
      ))}
    </MapView>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});
