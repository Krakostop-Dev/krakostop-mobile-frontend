import React, { createRef, useContext } from 'react';
import MapView from 'react-native-map-clustering';
import { Dimensions, StyleSheet } from 'react-native';
import { MapContext } from '../../modules/context/MapContext';
import ParticipantMarker from './ParticipantMarker';
import ClusteredMarker from './ClusterMarker';

const INIT_LATITUDE_DELTA = 0.0922;
const INIT_LONGITUDE_DELTA = 0.0421;

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
const MAP_BOUNDARIES = {
  NORTH_EAST: { latitude: 52, longitude: 0 },
  SOUTH_WEST: { latitude: 33, longitude: 26 },
};
function MapComponent() {
  const { participants, myLocation, setMap } = useContext(MapContext);

  const initialRegion = {
    latitude: myLocation.coords.latitude,
    longitude: myLocation.coords.longitude,
    latitudeDelta: INIT_LATITUDE_DELTA,
    longitudeDelta: INIT_LONGITUDE_DELTA,
  };

  let mapRef = createRef();
  function onMapReady() {
    mapRef.setMapBoundaries(
      MAP_BOUNDARIES.NORTH_EAST,
      MAP_BOUNDARIES.SOUTH_WEST
    );
    setMap(mapRef);
  }

  return (
    <MapView
      mapRef={ref => {
        mapRef = ref;
      }}
      onMapReady={onMapReady}
      followsUserLocation
      style={styles.mapStyle}
      initialRegion={initialRegion}
      renderCluster={({ id, geometry, properties, onPress }) => (
        <ClusteredMarker
          key={`cluster-${id}`}
          id={id}
          geometry={geometry}
          properties={properties}
          onPress={onPress}
        />
      )}
    >
      {participants.map((participant, index) => (
        <ParticipantMarker
          participant={participant}
          index={index}
          key={`Participant-${participant.id}`}
          coordinate={{
            latitude: Number(participant.lat),
            longitude: Number(participant.lng),
          }}
        />
      ))}
    </MapView>
  );
}

export default MapComponent;
