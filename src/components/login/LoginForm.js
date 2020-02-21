import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../styles/basic/ksBasic';
import LoginWithEmail from '../../modules/login/sendEmailWithAuthCode';

const styles = StyleSheet.create({
  input: {
    backgroundColor: ksStyle.colors.primaryColorMedium,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
  login_button_container: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login_button_text: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
});

function LoginForm({ loginButtonPressed, setError }) {
  const navigation = useContext(NavigationContext);

  const [email, setEmail] = useState('justynabasiak@interia.pl');
  const [pairNr, setPairNr] = useState('2');

  async function onPress() {
    const { status, message } = await LoginWithEmail(email, pairNr);
    if (status === 200) {
      loginButtonPressed(false);
      navigation.navigate('EmailAuth', { email });
    } else {
      loginButtonPressed(false);
      setError({ isError: true, message });
    }
  }

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
      <TouchableHighlight
        style={styles.login_button_container}
        onPress={() => onPress()}
      >
        <Text style={styles.login_button_text}>Zaloguj</Text>
      </TouchableHighlight>
    </View>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  loginButtonPressed: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
