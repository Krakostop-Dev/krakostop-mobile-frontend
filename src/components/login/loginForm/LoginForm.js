import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import { ksStyle } from '../../../styles/basic/ksBasic';

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
  const [email, setEmail] = useState('justynabasiak@interia.pl');
  const [pairNr, setPairNr] = useState('2');

  return (
    <View>
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
        placeholder="Nr pary"
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
    </View>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  loginButtonPressed: PropTypes.func.isRequired,
};
