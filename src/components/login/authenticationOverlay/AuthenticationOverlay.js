import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';
import AuthOverlayHeader from './AuthOverlayHeader';
import AuthOverlayContent from './AuthOverlayContent';
import AuthInputView from './AuthInputView';
import ButtonWithIcon from './ButtonWithIcon';
import LoginWithEmail from '../../../modules/login/sendEmailWithAuthCode';

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

const BUTTON_ICON = require('../../../../assets/envelope.png');

const HEADER_TITLE = 'Weryfikacja emaila';
const BUTTON_LABEL = 'Prześlij ponownie';

function AuthenticationOverlay({ navigation }) {
  const email = navigation.getParam('email');
  const pairNr = navigation.getParam('pairNr');

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  async function onPress() {
    const { status, message } = await LoginWithEmail(email, pairNr);
    if (status !== 200) {
      setError({ isError: true, message });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AuthOverlayHeader title={HEADER_TITLE} />
        <AuthOverlayContent>
          <AuthInputView email={email} />
          <ButtonWithIcon
            icon={BUTTON_ICON}
            label={BUTTON_LABEL}
            onPress={onPress}
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
