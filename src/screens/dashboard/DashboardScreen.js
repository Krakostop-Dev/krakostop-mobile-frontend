import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapContainer from '../../components/map/MapContainer';
import MainHeader from '../../components/header/MainHeader';
import CustomizedSearchBarOverlay from '../../components/searchBar';
import SafeArea from '../../styles/SafeArea';

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
  androidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const DashboardScreen = () => {
  return (
    <SafeArea>
      <MainHeader />
      <CustomizedSearchBarOverlay />
      <MapContainer style={styles} />
    </SafeArea>
  );
};

export default DashboardScreen;
