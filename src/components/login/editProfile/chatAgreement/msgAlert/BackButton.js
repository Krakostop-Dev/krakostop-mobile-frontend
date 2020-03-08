import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithText from '../../../../buttons/ButtonWithText';

const BUTTON_LABEL = 'Wróć i połącz';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 150,
  },
});

function BackButton({ setDisplayMsgAlert }) {
  function onPress() {
    setDisplayMsgAlert(false);
  }
  return (
    <ButtonWithText
      label={BUTTON_LABEL}
      onPress={onPress}
      style={styles.button}
    />
  );
}

export default BackButton;

BackButton.propTypes = {
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
