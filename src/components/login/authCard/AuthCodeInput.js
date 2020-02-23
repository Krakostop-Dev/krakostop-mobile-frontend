import { StyleSheet, TextInput } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import authenticateUser from '../../../modules/login/authenticateUser';
import { LoginContext } from '../../../modules/context/LoginContext';

const styles = StyleSheet.create({
  input: {
    width: '50%',
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    margin: 5,
    marginTop: 10,
    borderWidth: 1,
  },
});
const CODE_INPUT_PLACEHOLDER = 'Kod weryfikacyjny';

function AuthCodeInput({ setError, email, authCodeLength }) {
  const loginContext = useContext(LoginContext);
  const navigation = useContext(NavigationContext);

  async function onChangeText(authCode) {
    if (authCode.length === authCodeLength) {
      setError({ isError: false, message: '' });
      const { status, message, data } = await authenticateUser(email, authCode);
      if (status === 200) {
        const { user, token } = data;
        await loginContext.logIn(token, user);
        navigation.navigate('EditProfile');
      } else {
        setError({ isError: true, message });
      }
    }
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={CODE_INPUT_PLACEHOLDER}
      keyboardType="numeric"
      onChangeText={onChangeText}
      maxLength={6}
      disabled
      placeholderTextColor="rgba(0, 0, 0, 0.2)"
    />
  );
}

export default AuthCodeInput;

AuthCodeInput.propTypes = {
  email: PropTypes.string.isRequired,
  authCodeLength: PropTypes.number.isRequired,
  setError: PropTypes.func.isRequired,
};
