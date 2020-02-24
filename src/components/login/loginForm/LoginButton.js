import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import LoginWithEmail from '../../../modules/login/sendEmailWithAuthCode';
import ButtonWithText from '../ButtonWithText';

const BUTTON_LABEL = 'Zaloguj';

function LoginButton({ email, pairNr, loginButtonPressed, setError }) {
  const navigation = useContext(NavigationContext);

  async function onPress() {
    const { status, message } = await LoginWithEmail(email, pairNr);
    if (status === 200) {
      loginButtonPressed(false);
      navigation.navigate('Auth', { email, pairNr });
    } else {
      loginButtonPressed(false);
      setError({ isError: true, message });
    }
  }
  return <ButtonWithText label={BUTTON_LABEL} onPress={onPress} />;
}

export default LoginButton;

LoginButton.propTypes = {
  email: PropTypes.string.isRequired,
  pairNr: PropTypes.string.isRequired,
  loginButtonPressed: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
