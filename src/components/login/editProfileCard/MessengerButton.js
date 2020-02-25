import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import ButtonWithIcon from '../ButtonWithIcon';
import LoginWithEmail from '../../../modules/login/sendEmailWithAuthCode';

const BUTTON_ICON = require('../../../../assets/icons/messenger.png');

const BUTTON_LABEL = 'Połącz z Messengerem';
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
  },
});
function MessengerButton({ setError, setMsgLink }) {
  const navigation = useContext(NavigationContext);

  async function onPress() {
    const { status, message } = await LoginWithEmail('email', 'pairNr');
    if (status === 200) {
      setMsgLink('msg.com');
      navigation.navigate('App');
    } else {
      setError({ isError: true, message });
    }
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
