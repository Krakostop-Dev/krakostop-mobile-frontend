import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: ksStyle.colors.primaryColorDark,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const SafeArea = ({ children }) => (
  <SafeAreaView style={styles.androidSafeArea}>{children}</SafeAreaView>
);

export default SafeArea;

SafeArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
