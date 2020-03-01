import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  info_text: {
    textAlign: 'center',
    fontSize: 12,
    color: 'red',
    marginBottom: 3,
  },
});

function ErrorText({ style, errorText }) {
  return <Text style={[styles.info_text, style]}>{errorText}</Text>;
}

export default ErrorText;

ErrorText.defaultProps = {
  style: {},
};

ErrorText.propTypes = {
  errorText: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};
