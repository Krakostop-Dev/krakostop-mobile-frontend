import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import returnClusterStyle from '../../modules/map/ClusterHelper';
import Images from '../../../assets/Images';


const styles = StyleSheet.create({
  cluster: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ClusteredMarker = ({ id, geometry, properties, onPress }) => {
  const points = properties.point_count;
  const { width, height, top, fontSize } = returnClusterStyle(points);

  return (
    <Marker
      key={`cluster-marker-${id}`}
      coordinate={{
        longitude: geometry.coordinates[0],
        latitude: geometry.coordinates[1],
      }}
      onPress={onPress}
    >
      <ImageBackground source={CLUSTER_IMAGE} style={{ width, height }}>
        <View style={{ ...styles.cluster, top }}>
          <Text style={{ fontSize }}>{points}</Text>
        </View>
      </ImageBackground>
    </Marker>
  );
};

export default ClusteredMarker;

ClusteredMarker.propTypes = {
  id: PropTypes.number.isRequired,
  geometry: PropTypes.shape({
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  properties: PropTypes.shape({
    point_count: PropTypes.number.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};
