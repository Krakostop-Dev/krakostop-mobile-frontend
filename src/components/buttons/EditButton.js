import {
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../../assets/Images';

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

function EditButton({ style, onPress, rounded }) {
  return (
    <TouchableOpacity
      style={{ ...styles.edit_button_container, ...style }}
      onPress={onPress}
    >
      <Image
        source={rounded ? Images.icons.edit_rounded : Images.icons.edit}
        style={styles.edit_button}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
export default EditButton;

EditButton.propTypes = {
  style: TouchableHighlight.propTypes.style,
  onPress: PropTypes.func.isRequired,
  rounded: PropTypes.bool,
};
EditButton.defaultProps = {
  style: {},
  rounded: false,
};
