import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthOverlayInfo from './AuthOverlayInfo';
import { ksStyle } from '../../../styles/basic/ksBasic';
import LoginWithEmail from '../../../modules/login/sendEmailWithAuthCode';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info_text: { color: 'red' },
  button_container: {
    borderRadius: 10,
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    margin: 5,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    padding: 10,
  },
  button_image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  button_label: {
    color: 'white',
    fontSize: 18,
  },
});

const BUTTON_IMAGE = require('../../../../assets/envelope.png');

const TIME_EXPIRED_INFO = `Czas na wpisanie kodu minął, kliknij w poniższy przycisk, aby wysłać kod ponownie`;
const BUTTON_LABEL = 'Prześlij ponownie';

function AuthTimeExpiredView({
  email,
  pairNr,
  setTimeExpired,
  setTimerRestarted,
}) {
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  async function onPress() {
    const { status, message } = await LoginWithEmail(email, pairNr);
    if (status === 200) {
      setTimerRestarted(true);
      setTimeExpired(false);
    } else {
      setError({ isError: true, message });
    }
  }
  return (
    <View style={styles.container}>
      <AuthOverlayInfo style={styles.info_text} infoText={TIME_EXPIRED_INFO} />
      <TouchableHighlight
        onPress={() => onPress()}
        style={styles.button_container}
      >
        <View style={styles.button}>
          <Image source={BUTTON_IMAGE} style={styles.button_image} />
          <Text style={styles.button_label}>{BUTTON_LABEL}</Text>
          {hasErrorOccurred ? <Text>{hasErrorOccurred.message}</Text> : null}
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default AuthTimeExpiredView;

AuthTimeExpiredView.propTypes = {
  email: PropTypes.string.isRequired,
  pairNr: PropTypes.string.isRequired,
  setTimeExpired: PropTypes.func.isRequired,
  setTimerRestarted: PropTypes.func.isRequired,
};
