import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';
import AuthOverlayHeader from './AuthOverlayHeader';
import AuthOverlayContent from './AuthOverlayContent';
import AuthTimer from './AuthTimer';
import AuthOverlayInfo from './AuthOverlayInfo';
import AuthCodeInput from './AuthCodeInput';

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
});

const AUTH_CODE_LENGTH = 6;
const HEADER_TITLE = 'Weryfikacja emaila';
const EMAIL_AUTH_INFO = `Na twój adres email został wysłany ${AUTH_CODE_LENGTH}-cyfrowy kod weryfikacyjny.\nWpisz go poniżej:`;

function AuthenticationOverlay({ navigation }) {
  const email = navigation.getParam('email');
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AuthOverlayHeader title={HEADER_TITLE} />
        <AuthOverlayContent>
          <AuthTimer />
          <AuthOverlayInfo infoText={EMAIL_AUTH_INFO} />
          <AuthCodeInput
            email={email}
            setError={setError}
            authCodeLength={AUTH_CODE_LENGTH}
          />
          {hasErrorOccurred ? <Text>{hasErrorOccurred.message}</Text> : null}
        </AuthOverlayContent>
      </View>
    </View>
  );
}

export default AuthenticationOverlay;

AuthenticationOverlay.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
