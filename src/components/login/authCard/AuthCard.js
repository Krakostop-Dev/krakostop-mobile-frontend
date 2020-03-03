import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '../../card/CardHeader';
import CardContent from '../../card/CardContent';
import AuthInputView from './AuthInputView';

import Card from '../../card/Card';
import AuthResendEmailButton from './AuthResendEmailButton';
import InfoText from '../InfoText';
import SmallInfoText from '../../SmallInfoText';

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
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <AuthInputView email={email} />
        <InfoText infoText={RESEND_INFO} />
        <AuthResendEmailButton
          pairNr={pairNr}
          email={email}
          setError={setError}
        />
        {hasErrorOccurred.isError ? (
          <SmallInfoText text={hasErrorOccurred.message} color="red" />
        ) : null}
      </CardContent>
    </Card>
  );
}

export default AuthCard;

AuthCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
