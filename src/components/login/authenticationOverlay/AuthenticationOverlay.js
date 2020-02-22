import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';
import AuthOverlayHeader from './AuthOverlayHeader';
import AuthOverlayContent from './AuthOverlayContent';
import AuthInputView from './AuthInputView';
import AuthTimeExpiredView from './AuthTimeExpiredView';
import AuthTimer from './AuthTimer';

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

const HEADER_TITLE = 'Weryfikacja emaila';
const CODE_VALIDITY_TIME = 5;

function AuthenticationOverlay({ navigation }) {
  const email = navigation.getParam('email');
  const pairNr = navigation.getParam('pairNr');

  const [hasTimeExpired, setTimeExpired] = useState(false);
  const [isTimerRestarted, setTimerRestarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AuthOverlayHeader title={HEADER_TITLE} />
        <AuthOverlayContent>
          <AuthTimer
            codeValidityTime={CODE_VALIDITY_TIME}
            setTimeExpired={setTimeExpired}
            setTimerRestarted={setTimerRestarted}
            isTimerRestarted={isTimerRestarted}
          />
          {hasTimeExpired ? (
            <AuthTimeExpiredView
              email={email}
              pairNr={pairNr}
              setTimeExpired={setTimeExpired}
              setTimerRestarted={setTimerRestarted}
            />
          ) : (
            <AuthInputView email={email} />
          )}
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
