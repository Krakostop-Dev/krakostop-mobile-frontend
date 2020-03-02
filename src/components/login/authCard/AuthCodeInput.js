import { StyleSheet, TextInput } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import { LoginContext } from '../../../modules/context/LoginContext';
import { ksStyle } from '../../../styles/basic/ksBasic';
import { sendEmailWithAuthCode } from '../../../modules/communication/CommunicationMenager';
import { convertRelativePathToAbsoluteUri } from '../../../modules/ImageLoader';

const styles = StyleSheet.create({
  input: {
    ...ksStyle.input,
    width: 150,
    margin: 5,
    borderWidth: 1,
  },
});
const CODE_INPUT_PLACEHOLDER = 'Kod weryfikacyjny';

function AuthCodeInput({ setError, email, authCodeLength, hasErrorOccurred }) {
  const loginContext = useContext(LoginContext);
  const navigation = useContext(NavigationContext);

  async function onChangeText(authCode) {
    setError({ isError: false, message: '' });
    if (authCode.length === authCodeLength) {
      setError({ isError: false, message: '' });
      const { status, message, data } = await sendEmailWithAuthCode(
        email,
        authCode
      );
      if (status === 200) {
        const { user, token } = data;
        user.avatar = convertRelativePathToAbsoluteUri(user.avatar);
        await loginContext.logIn(token, user);
        navigation.navigate('EditProfile');
      } else {
        setError({ isError: true, message });
      }
    }
  }

  return (
    <TextInput
      style={[
        styles.input,
        hasErrorOccurred.isError ? { borderColor: 'red' } : null,
      ]}
      placeholder={CODE_INPUT_PLACEHOLDER}
      keyboardType="numeric"
      onChangeText={onChangeText}
      maxLength={authCodeLength}
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
  hasErrorOccurred: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};
