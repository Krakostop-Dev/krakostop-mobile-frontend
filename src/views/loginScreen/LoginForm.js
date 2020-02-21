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
import LoginButtonOnPress from '../../modules/login/LoginButtonOnPress';

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
  const [pairID, setPairID] = useState('2');

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
        value={pairID}
        onChangeText={setPairID}
        disabled
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
      />
      <TouchableHighlight
        style={styles.login_button_container}
        onPress={() =>
          LoginButtonOnPress(
            email,
            pairID,
            loginButtonPressed,
            setError,
            navigation
          )
        }
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
