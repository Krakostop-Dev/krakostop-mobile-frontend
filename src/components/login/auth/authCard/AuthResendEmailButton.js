import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithIcon from '../../buttons/ButtonWithIcon';
import { sendEmailWithPairNr } from '../../../modules/communication/CommunicationMenager';

const BUTTON_ICON = require('../../../../assets/icons/envelope.png');

const BUTTON_LABEL = 'Prześlij ponownie';

function AuthResendEmailButton({ email, pairNr, setError }) {
  async function onPress() {
    const { status, message } = await sendEmailWithPairNr(email, pairNr);
    if (status !== 200) {
      setError({ isError: true, message });
    }
  }
  return (
    <ButtonWithIcon icon={BUTTON_ICON} label={BUTTON_LABEL} onPress={onPress} />
  );
}

export default AuthResendEmailButton;

AuthResendEmailButton.propTypes = {
  setError: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pairNr: PropTypes.string.isRequired,
};
