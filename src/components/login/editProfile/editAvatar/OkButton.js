import {
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  ok_button_container: {
    height: 30,
    width: 30,
  },
  ok_button: {
    flex: 1,
    height: null,
    width: null,
  },
});

const OK_ICON = require('../../../../../assets/icons/ok.png');

function OkButton({ style, onPress }) {
  return (
    <TouchableOpacity
      style={{ ...styles.ok_button_container, ...style }}
      onPress={onPress}
    >
      <Image source={OK_ICON} style={styles.ok_button} resizeMode="contain" />
    </TouchableOpacity>
  );
}
export default OkButton;

OkButton.propTypes = {
  style: TouchableHighlight.propTypes.style,
  onPress: PropTypes.func.isRequired,
};
OkButton.defaultProps = {
  style: {},
};
