import React, { useState } from 'react';
import Card from '../../card/Card';
import CardHeader from '../../card/CardHeader';
import CardContent from '../../card/CardContent';
import InfoText from '../InfoText';
import MessengerButton from './MessengerButton';
import SmallInfoText from '../../SmallInfoText';
import ChatNextButton from './ChatNextButton';

const HEADER_TITLE = 'Konfiguracja Profilu 2/3';
const MSG_TEXT =
  'Jeżeli chcesz korzystać z czatu, połącz aplikację z Messengerem';

function ChatAgreement() {
  const [msgLink, setMsgLink] = useState('');
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });
  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={MSG_TEXT} />
        <MessengerButton setError={setError} setMsgLink={setMsgLink} />
        <ChatNextButton msgLink={msgLink} setError={setError} />
        {hasErrorOccurred.isError ? (
          <SmallInfoText text={hasErrorOccurred.message} color="red" />
        ) : null}
      </CardContent>
    </Card>
  );
}

export default ChatAgreement;
