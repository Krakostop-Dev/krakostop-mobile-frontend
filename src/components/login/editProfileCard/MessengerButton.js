import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import ButtonWithIcon from '../ButtonWithIcon';
import LoginWithEmail from '../../../modules/login/sendEmailWithAuthCode';

const BUTTON_ICON = require('../../../../assets/icons/messenger.png');

const BUTTON_LABEL = 'Połącz czat z Messengerem';

function MessengerButton({ setError }) {
  const navigation = useContext(NavigationContext);

  async function onPress() {
    const { status, message } = await LoginWithEmail('email', 'pairNr');
    if (status === 200) {
      navigation.navigate('App');
    } else {
      setError({ isError: true, message });
    }
  }
  return (
    <ButtonWithIcon icon={BUTTON_ICON} label={BUTTON_LABEL} onPress={onPress} />
  );
}

export default MessengerButton;

MessengerButton.propTypes = {
  setError: PropTypes.func.isRequired,
};
