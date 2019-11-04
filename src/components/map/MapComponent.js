import MapView from 'react-native-maps';
import React, { useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { MapContext } from '../context/MapContext';
import UserMarker from './UserMarker';
import ParticipantMarker from './PatricipantMarker';

const INIT_LATITUDE_DELTA = 0.0922;
const INIT_LONGITUDE_DELTA = 0.0421;
const PARTICIPANT_AVATAR = require('../../../assets/hand.png');
const PARTICIPANT_LATITUDE = 42.254670;
const PARTICIPANT_LONGITUDE = 11.758470;
const PARTICIPANT_ID = 10;

const MapComponent = () => {
  const mapContext = useContext(MapContext);
  const initialRegion = {
    latitude: mapContext.my_location.coords.latitude,
    longitude: mapContext.my_location.coords.longitude,
    latitudeDelta: INIT_LATITUDE_DELTA,
    longitudeDelta: INIT_LONGITUDE_DELTA,
  };
  return (
    <MapView style={styles.mapStyle} initialRegion={initialRegion}>
      <UserMarker />
      <ParticipantMarker
        participant={{
          location: {
            coords: {
              latitude: PARTICIPANT_LATITUDE,
              longitude: PARTICIPANT_LONGITUDE
            },
          },
          id: PARTICIPANT_ID,
          avatar: PARTICIPANT_AVATAR,
        }}
      />
    </MapView>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
