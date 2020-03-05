/* eslint-disable no-undef */
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithIcon from '../../buttons/ButtonWithIcon';

const BUTTON_ICON = require('../../../../assets/icons/messenger.png');

const BUTTON_LABEL = 'Połącz z Messengerem';
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
  },
});
// eslint-disable-next-line no-unused-vars
function MessengerButton({ setError, setMsgLink }) {
  async function onPress() {
    // TODO: Create logic to connect msg with app
    alert('Connect MSG');
  }
  return (
    <ButtonWithIcon
      style={styles.button}
      icon={BUTTON_ICON}
      label={BUTTON_LABEL}
      onPress={onPress}
    />
  );
}

export default MessengerButton;

MessengerButton.propTypes = {
  setError: PropTypes.func.isRequired,
  setMsgLink: PropTypes.func.isRequired,
};
