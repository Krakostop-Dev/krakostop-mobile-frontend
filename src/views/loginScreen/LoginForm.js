import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ksStyle } from '../../styles/basic/ksBasic';
import PropTypes from 'prop-types';

function LoginForm({ onClick }) {
  const [email, setEmail] = useState('');
  const [pairID, setPairID] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        autoCompleteType={'email'}
        textContentType={'emailAddress'}
        value={email}
        onChangeText={setEmail}
        disabled={true}
        placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
      />
      <TextInput
        style={styles.input}
        placeholder={'Nr pary'}
        keyboardType={'numeric'}
        value={pairID}
        onChangeText={setPairID}
        disabled={true}
        placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
      />
      <TouchableHighlight
        style={styles.login_button_container}
        onPress={() => onClick(email, pairID)}
      >
        <Text style={styles.login_button_text}>Zaloguj</Text>
      </TouchableHighlight>
    </View>
  );
}

export default LoginForm;

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
LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
