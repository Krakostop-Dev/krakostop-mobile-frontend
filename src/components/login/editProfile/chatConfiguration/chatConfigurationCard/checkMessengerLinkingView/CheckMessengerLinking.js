import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import SmallInfoText from '../../../../../SmallInfoText';
import Messages from '../../../../../../modules/Messages';
import CheckMessengerButton from './CheckMessengerButton';
import InfoText from '../../../../InfoText';

const CHECK_MSG_CONNECTION =
  'Jeżeli nastąpiło przekierowanie do Twojego konta na Messengerze, konfiguracja przebiegła pomyślnie. W przeciwnym razie przejdź dalej, a po zakończeniu konfiguracji profilu, skontaktuj się z organizatorami.';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
function CheckMessengerLinking({ msgLink }) {
  const [hasButtonBeenPressed, setButtonBeenPressed] = useState(false);

  return (
    <View style={styles.container}>
      <SmallInfoText text={Messages.FB_LINK_FORMAT.success} color="green" />
      <CheckMessengerButton
        msgLink={msgLink}
        setButtonBeenPressed={setButtonBeenPressed}
      />
      {hasButtonBeenPressed ? (
        <InfoText infoText={CHECK_MSG_CONNECTION} />
      ) : null}
    </View>
  );
}

export default CheckMessengerLinking;

CheckMessengerLinking.propTypes = {
  msgLink: PropTypes.string.isRequired,
};
