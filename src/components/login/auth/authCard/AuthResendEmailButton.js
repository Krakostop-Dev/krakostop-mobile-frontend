import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithIcon from '../../../buttons/ButtonWithIcon';
import { sendEmailWithPairNr } from '../../../../modules/communication/CommunicationMenager';
import Images from '../../../../../assets/Images';

const BUTTON_LABEL = 'Prześlij ponownie';

function AuthResendEmailButton({ email, pairNr, setError }) {
  async function onPress() {
    const { status, message } = await sendEmailWithPairNr(email, pairNr);
    if (status !== 200) {
      setError({ isError: true, message });
    }
  }
  return (
    <ButtonWithIcon
      icon={Images.icons.envelope}
      label={BUTTON_LABEL}
      onPress={onPress}
    />
  );
}

export default AuthResendEmailButton;

AuthResendEmailButton.propTypes = {
  setError: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pairNr: PropTypes.string.isRequired,
};
