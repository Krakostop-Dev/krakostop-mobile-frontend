import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  info_text: {
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 3,
  },
});

function SmallInfoText({ style, text, color }) {
  return <Text style={[styles.info_text, style, { color }]}>{text}</Text>;
}

export default SmallInfoText;

SmallInfoText.defaultProps = {
  style: {},
};

SmallInfoText.propTypes = {
  text: PropTypes.string.isRequired,
  style: Text.propTypes.style,
  color: PropTypes.oneOf(['red', 'green']).isRequired,
};
