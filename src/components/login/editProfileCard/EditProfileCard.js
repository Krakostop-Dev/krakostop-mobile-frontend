import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '../../card/CardHeader';
import CardContent from '../../card/CardContent';
import Card from '../../card/Card';
import MessengerButton from './MessengerButton';
import ChangeAvatarView from './ChangeAvatarView';
import InfoText from '../InfoText';
import { LoginContext } from '../../../modules/context/LoginContext';
import NextButton from './NextButton';
import SmallInfoText from '../../SmallInfoText';

const HEADER_TITLE = 'Konfiguracja profilu';

const MSG_TEXT =
  'Jeżeli chcesz korzystać z czatu, połącz aplikację z Messengerem';

function EditProfileCard() {
  const { user } = useContext(LoginContext);

  const HELLO_TEXT = `Cześć ${user.first_name}!\nW celu dokończenia konfiguracji Twojego profilu prosimy Cię o wgranie avatara.`;
  const [avatar, setAvatar] = useState('');
  const [msgLink, setMsgLink] = useState('');
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={HELLO_TEXT} />
        <ChangeAvatarView setError={setError} setAvatar={setAvatar} />
        <InfoText infoText={MSG_TEXT} />
        <MessengerButton setError={setError} setMsgLink={setMsgLink} />
        <NextButton avatar={avatar} msgLink={msgLink} setError={setError} />
        {hasErrorOccurred.isError ? (
          <SmallInfoText text={hasErrorOccurred.message} color="red" />
        ) : null}
      </CardContent>
    </Card>
  );
}

export default EditProfileCard;

EditProfileCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
