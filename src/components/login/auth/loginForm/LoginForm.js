import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import { ksStyle } from '../../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  input: {
    ...ksStyle.input,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    width: 300,
  },
  button: {
    width: 150,
  },
});
function LoginForm({ loginButtonPressed }) {
  const [email, setEmail] = useState('');
  const [pairNr, setPairNr] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCompleteType="email"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
      />
      <TextInput
        style={styles.input}
        placeholder="Numer pary"
        keyboardType="numeric"
        value={pairNr}
        onChangeText={setPairNr}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
      />
      <LoginButton
        pairNr={pairNr}
        email={email}
        loginButtonPressed={loginButtonPressed}
      />
    </KeyboardAvoidingView>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  loginButtonPressed: PropTypes.func.isRequired,
};
