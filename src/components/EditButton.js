import {
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  edit_button_container: {
    height: 30,
    width: 30,
  },
  edit_button: {
    flex: 1,
    height: null,
    width: null,
  },
});

const EDIT = require('../../assets/icons/edit.png');

function EditButton({ style, onPress }) {
  return (
    <TouchableOpacity
      style={{ ...styles.edit_button_container, ...style }}
      onPress={onPress}
    >
      <Image source={EDIT} style={styles.edit_button} resizeMode="contain" />
    </TouchableOpacity>
  );
}
export default EditButton;

EditButton.propTypes = {
  style: TouchableHighlight.propTypes.style,
  onPress: PropTypes.func.isRequired,
};

EditButton.defaultProps = {
  style: {},
};
