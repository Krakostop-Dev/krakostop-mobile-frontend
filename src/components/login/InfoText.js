import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  info_container: {
    marginVertical: 5,
  },
  info_text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

function InfoText({ style, infoText }) {
  return (
    <View style={styles.info_container}>
      <Text style={{ ...style, ...styles.info_text }}>{infoText}</Text>
    </View>
  );
}

export default InfoText;

InfoText.defaultProps = {
  style: {},
};

InfoText.propTypes = {
  infoText: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};
