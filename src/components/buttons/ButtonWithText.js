import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  login_button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  login_button_text: {
    fontSize: 16,
    color: 'white',
  },
});

function ButtonWithText({ onPress, style, label }) {
  return (
    <TouchableOpacity
      style={{ ...styles.login_button_container, ...style }}
      onPress={() => onPress()}
    >
      <Text style={styles.login_button_text}>{label}</Text>
    </TouchableOpacity>
  );
}

export default ButtonWithText;

ButtonWithText.defaultProps = {
  style: {},
};

ButtonWithText.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  label: PropTypes.string.isRequired,
};
