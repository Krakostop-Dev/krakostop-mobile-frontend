import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import { MapContext } from '../context/MapContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapComponent from './MapComponent';

const MapContainer = () => {
  const mapContext = useContext(MapContext);
  const [isLocationDataUpdated, setUpdateLocationStatus] = useState(false);

  useEffect(() => {
    const updateLocation = async () => {
      await mapContext.updateMyLocation();
      await mapContext.updateParticipantsLocation();
      setUpdateLocationStatus(true);
    };

    updateLocation();
  }, []);

  return (
    <View style={styles.container}>
      {isLocationDataUpdated ? <MapComponent /> : <Spinner color="red" />}
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
