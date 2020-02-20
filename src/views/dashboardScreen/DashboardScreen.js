import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapContainer from '../../components/map/MapContainer';
import MainHeader from '../../components/header/MainHeader';

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

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.stackContainer}>
      <MainHeader style={styles.header} navigation={navigation} />
      <MapContainer style={styles} />
    </View>
  );
};

DashboardScreen.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default DashboardScreen;

DashboardScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
