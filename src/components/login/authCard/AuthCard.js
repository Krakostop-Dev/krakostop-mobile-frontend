import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginCardHeader from '../loginCard/LoginCardHeader';
import LoginCardContent from '../loginCard/LoginCardContent';
import AuthInputView from './AuthInputView';

import LoginCard from '../loginCard/LoginCard';
import AuthResendEmailButton from './AuthResendEmailButton';
import InfoText from '../InfoText';
import ErrorText from '../ErrorText';

const HEADER_TITLE = 'Weryfikacja emaila';

const RESEND_INFO =
  'Jeśli nie otrzymałaś\\eś maila kliknij w poniższy przycisk';
function AuthCard({ navigation }) {
  const email = navigation.getParam('email');
  const pairNr = navigation.getParam('pairNr');

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <LoginCard>
      <LoginCardHeader title={HEADER_TITLE} />
      <LoginCardContent>
        <AuthInputView email={email} />
        <InfoText infoText={RESEND_INFO} />
        <AuthResendEmailButton
          pairNr={pairNr}
          email={email}
          setError={setError}
        />
        {hasErrorOccurred.isError ? (
          <ErrorText errorText={hasErrorOccurred.message} />
        ) : null}
      </LoginCardContent>
    </LoginCard>
  );
}

export default AuthCard;

AuthCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
