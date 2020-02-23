import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoText from '../InfoText';
import AuthCodeInput from './AuthCodeInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

const AUTH_CODE_LENGTH = 6;
const EMAIL_AUTH_INFO = `Na twój adres email został wysłany ${AUTH_CODE_LENGTH}-cyfrowy kod weryfikacyjny.\nWpisz go poniżej:`;

function AuthInputView({ email }) {
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <View style={styles.container}>
      <InfoText infoText={EMAIL_AUTH_INFO} />
      <AuthCodeInput
        email={email}
        setError={setError}
        authCodeLength={AUTH_CODE_LENGTH}
      />
      {hasErrorOccurred ? <Text>{hasErrorOccurred.message}</Text> : null}
    </View>
  );
}

export default AuthInputView;

AuthInputView.propTypes = {
  email: PropTypes.string.isRequired,
};
