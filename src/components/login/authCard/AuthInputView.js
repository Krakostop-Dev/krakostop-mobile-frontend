import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoText from '../InfoText';
import AuthCodeInput from './AuthCodeInput';
import ErrorText from '../ErrorText';

const styles = StyleSheet.create({
  container: {
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
        hasErrorOccurred={hasErrorOccurred}
        authCodeLength={AUTH_CODE_LENGTH}
      />
      {hasErrorOccurred.isError ? (
        <ErrorText errorText={hasErrorOccurred.message} />
      ) : null}
    </View>
  );
}

export default AuthInputView;

AuthInputView.propTypes = {
  email: PropTypes.string.isRequired,
};
