import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  info_container: {
    marginVertical: 10,
  },
  info_text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

function InfoText({ style, infoText, warning }) {
  return (
    <View style={styles.info_container}>
      <Text
        style={[styles.info_text, style, warning ? { color: 'red' } : null]}
      >
        {infoText}
      </Text>
    </View>
  );
}

export default InfoText;

InfoText.defaultProps = {
  style: {},
  warning: false,
};

InfoText.propTypes = {
  infoText: PropTypes.string.isRequired,
  style: Text.propTypes.style,
  warning: PropTypes.bool,
};
