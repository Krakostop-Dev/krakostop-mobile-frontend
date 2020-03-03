import React from 'react';
import { StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithText from './login/ButtonWithText';

const styles = StyleSheet.create({
  button: {
    width: 100,
    marginHorizontal: 5,
    marginTop: 0,
    alignSelf: 'flex-end',
  },
});

function NextButton({ style, label, onPress }) {
  return (
    <ButtonWithText
      onPress={onPress}
      label={label}
      style={{ ...styles.button, ...style }}
    />
  );
}

export default NextButton;

NextButton.defaultProps = {
  style: {},
};

NextButton.propTypes = {
  style: ViewPropTypes.style,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
