import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Spinner } from 'native-base';
import { MapContext } from '../context/MapContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapComponent from './MapComponent';

const MapContainer = () => {
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
      {isLocationUpdated ? <MapComponent /> : <Spinner color="red" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ksBasic.stackContainer,
    alignItems: 'center',
  },
});

export default MapContainer;
