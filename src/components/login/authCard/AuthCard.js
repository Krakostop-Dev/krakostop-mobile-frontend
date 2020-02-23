import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import LoginCardHeader from '../loginCard/LoginCardHeader';
import LoginCardContent from '../loginCard/LoginCardContent';
import AuthInputView from './AuthInputView';

import LoginCard from '../loginCard/LoginCard';
import AuthResendEmailButton from './AuthResendEmailButton';

const HEADER_TITLE = 'Weryfikacja emaila';

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
        <AuthResendEmailButton
          pairNr={pairNr}
          email={email}
          setError={setError}
        />
        {hasErrorOccurred ? <Text>{hasErrorOccurred.message}</Text> : null}
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
