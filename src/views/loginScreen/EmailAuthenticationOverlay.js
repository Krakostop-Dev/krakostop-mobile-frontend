import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';
import authenticateUser from '../../modules/login/authenticateUser';
import { LoginContext } from '../../modules/context/LoginContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.5,
    width: '90%',
    backgroundColor: ksStyle.colors.primaryColorLight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flex: 1,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    color: 'white',
    fontSize: 24,
  },
  content: {
    flex: 5,
    alignItems: 'center',
  },
  timer_image: {
    width: 80,
    height: 80,
    margin: 5,
  },
  timer_counter: {
    width: '90%',
    padding: 10,
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  timer_counter_text: {
    color: 'white',
    fontSize: 18,
  },
  info_container: {
    margin: 5,
    width: '90%',
  },
  info_text: {
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    width: '50%',
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    margin: 5,
    marginTop: 20,
    borderWidth: 1,
  },
});
const TIMER = require('../../../assets/timer.png');

const AUTH_CODE_LENGTH = 6;
const HEADER_TITLE = 'Weryfikacja emaila';
const EMAIL_AUTH_INFO = `Na twój adres email został wysłany ${AUTH_CODE_LENGTH}-cyfrowy kod weryfikacyjny.\nWpisz go poniżej:`;
const CODE_INPUT_PLACEHOLDER = 'Kod weryfikacyjny';

function EmailAuthenticationOverlay({ navigation }) {
  const email = navigation.getParam('email');
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });
  const loginContext = useContext(LoginContext);

  async function onChangeText(authCode) {
    if (authCode.length === AUTH_CODE_LENGTH) {
      setError({ isError: false, message: '' });
      const { status, message, data } = await authenticateUser(email, authCode);
      if (status === 200) {
        const { user, token } = data;
        await loginContext.logIn(token, user);
        navigation.navigate('App');
      } else {
        setError({ isError: true, message });
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.header_text}>{HEADER_TITLE}</Text>
        </View>
        <View style={styles.content}>
          <Image source={TIMER} style={styles.timer_image} />
          <View style={styles.timer_counter}>
            <Text style={styles.timer_counter_text}>50 s</Text>
          </View>
          <View style={styles.info_container}>
            <Text style={styles.info_text}>{EMAIL_AUTH_INFO}</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder={CODE_INPUT_PLACEHOLDER}
            keyboardType="numeric"
            onChangeText={onChangeText}
            maxLength={6}
            disabled
            placeholderTextColor="rgba(0, 0, 0, 0.2)"
          />
          {hasErrorOccurred ? <Text>{hasErrorOccurred.message}</Text> : null}
        </View>
      </View>
    </View>
  );
}

export default EmailAuthenticationOverlay;

EmailAuthenticationOverlay.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
