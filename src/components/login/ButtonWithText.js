import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  login_button_container: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login_button_text: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
});

function ButtonWithText({ onPress, style, label }) {
  return (
    <TouchableHighlight
      style={{ ...styles.login_button_container, ...style }}
      onPress={() => onPress()}
    >
      <Text style={styles.login_button_text}>{label}</Text>
    </TouchableHighlight>
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
