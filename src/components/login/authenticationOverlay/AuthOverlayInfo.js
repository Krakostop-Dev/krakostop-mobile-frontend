import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  info_container: {
    margin: 5,
    width: '90%',
  },
  info_text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

function AuthOverlayInfo({ infoText }) {
  return (
    <View style={styles.info_container}>
      <Text style={styles.info_text}>{infoText}</Text>
    </View>
  );
}

export default AuthOverlayInfo;

AuthOverlayInfo.propTypes = {
  infoText: PropTypes.string.isRequired,
};
