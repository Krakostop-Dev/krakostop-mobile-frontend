import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Linking } from 'expo';
import ButtonWithIcon from '../../../../../buttons/ButtonWithIcon';

const BUTTON_ICON = require('../../../../../../../assets/icons/messenger.png');

const BUTTON_LABEL = 'Sprawdź poprawność linku';
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
  },
});
function CheckMessengerButton({ msgLink, setButtonBeenPressed }) {
  async function onPress() {
    setButtonBeenPressed(true);
    await Linking.openURL(msgLink);
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

export default CheckMessengerButton;

CheckMessengerButton.propTypes = {
  msgLink: PropTypes.string.isRequired,
  setButtonBeenPressed: PropTypes.func.isRequired,
};
