import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import LoginCardHeader from '../loginCard/LoginCardHeader';
import LoginCardContent from '../loginCard/LoginCardContent';
import LoginCard from '../loginCard/LoginCard';
import MessengerButton from './MessengerButton';
import ChangeAvatarView from './ChangeAvatarView';
import InfoText from '../InfoText';
import { LoginContext } from '../../../modules/context/LoginContext';
import ButtonWithText from '../ButtonWithText';

const HEADER_TITLE = 'Konfiguracja profilu';

const MSG_TEXT =
  'Jeżeli chcesz korzystać z czatu, połącz aplikację z Messengerem';

function EditProfileCard() {
  const navigation = useContext(NavigationContext);
  const { user } = useContext(LoginContext);

  const HELLO_TEXT = `Cześć ${user.first_name}!\nW celu dokończenia konfiguracji Twojego profilu prosimy Cię o wgranie avatara.`;

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <LoginCard>
      <LoginCardHeader title={HEADER_TITLE} />
      <LoginCardContent>
        <InfoText infoText={HELLO_TEXT} />
        <ChangeAvatarView />
        <InfoText infoText={MSG_TEXT} />
        <MessengerButton setError={setError} />
        <ButtonWithText
          onPress={() => navigation.navigate('MsgAlert')}
          label="Dalej"
          style={{
            width: '30%',
            marginTop: 5,
            alignSelf: 'flex-end',
          }}
        />
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
