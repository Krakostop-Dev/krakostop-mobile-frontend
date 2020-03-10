import React, { useContext } from 'react';
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

function MapComponent() {
  const mapContext = useContext(MapContext);
  const { participants } = mapContext;

  const initialRegion = {
    latitude: mapContext.my_location.coords.latitude,
    longitude: mapContext.my_location.coords.longitude,
    latitudeDelta: INIT_LATITUDE_DELTA,
    longitudeDelta: INIT_LONGITUDE_DELTA,
  };

  return (
    <MapView
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
