import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  info_text: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});

function InfoText({ style, infoText, warning: important }) {
  return (
    <Text
      style={[styles.info_text, style, important ? { color: 'red' } : null]}
    >
      {infoText}
    </Text>
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
