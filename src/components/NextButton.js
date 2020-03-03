import React from 'react';
import { StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithText from './login/ButtonWithText';

const styles = StyleSheet.create({
  button: {
    width: '30%',
    marginHorizontal: 5,
    marginTop: 0,
  },
});

const LABEL = 'Dalej';

function NextButton({ style, onPress }) {
  return (
    <ButtonWithText
      onPress={onPress}
      label={LABEL}
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
  onPress: PropTypes.func.isRequired,
};
