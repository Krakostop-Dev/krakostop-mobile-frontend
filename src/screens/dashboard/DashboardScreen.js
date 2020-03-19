import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapContainer from '../../components/map/MapContainer';
import MainHeader from '../../components/header/MainHeader';
import CustomizedSearchBarOverlay from '../../components/searchBar';

const styles = StyleSheet.create({
  stackContainer: {
    ...ksBasic.stackContainer,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stack: {
    ...ksBasic.stack,
    flex: 0.7,
  },
});

const DashboardScreen = () => {
  return (
    <View style={styles.stackContainer}>
      <MainHeader />
      <CustomizedSearchBarOverlay />

      <MapContainer style={styles} />
    </View>
  );
};

export default DashboardScreen;
