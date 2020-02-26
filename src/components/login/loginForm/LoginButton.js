import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import LoginWithEmail from '../../../modules/login/sendEmailWithAuthCode';
import ButtonWithText from '../ButtonWithText';

const BUTTON_LABEL = 'Zaloguj';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 150,
  },
});

function LoginButton({ email, pairNr, loginButtonPressed }) {
  const navigation = useContext(NavigationContext);

  async function onPress() {
    loginButtonPressed(true);
    const { status, message } = await LoginWithEmail(email, pairNr);
    loginButtonPressed(false);
    if (status === 200) {
      navigation.navigate('Auth', { email, pairNr });
    } else {
      navigation.navigate('ErrorOverlay', { errorMessage: message });
    }
  }
  return (
    <ButtonWithText
      label={BUTTON_LABEL}
      onPress={onPress}
      style={styles.button}
    />
  );
}

export default LoginButton;

LoginButton.propTypes = {
  email: PropTypes.string.isRequired,
  pairNr: PropTypes.string.isRequired,
  loginButtonPressed: PropTypes.func.isRequired,
};
