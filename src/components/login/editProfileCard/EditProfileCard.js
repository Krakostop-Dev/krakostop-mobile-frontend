import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import LoginCardHeader from '../loginCard/LoginCardHeader';
import LoginCardContent from '../loginCard/LoginCardContent';
import LoginCard from '../loginCard/LoginCard';
import MessengerButton from './MessengerButton';
import ChangeAvatarView from './ChangeAvatarView';

const HEADER_TITLE = 'Konfiguracja profilu';

function EditProfileCard() {
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <LoginCard>
      <LoginCardHeader title={HEADER_TITLE} />
      <LoginCardContent>
        <ChangeAvatarView />
        <MessengerButton setError={setError} />
        {hasErrorOccurred ? <Text>{hasErrorOccurred.message}</Text> : null}
      </LoginCardContent>
    </LoginCard>
  );
}

export default EditProfileCard;

EditProfileCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
