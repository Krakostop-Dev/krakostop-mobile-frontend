import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../card/Card';
import CardHeader from '../../../../card/CardHeader';
import CardContent from '../../../../card/CardContent';
import InfoText from '../../../InfoText';
import MessengerButton from './MessengerButton';
import SmallInfoText from '../../../../SmallInfoText';
import ChatNavFooter from './ChatNavFooter';
import MsgLinkView from './MsgLinkView';
import { LoginContext } from '../../../../../modules/context/LoginContext';
import { checkFormatValidity } from '../../../../../modules/MessengerManager';
import Messages from '../../../../../modules/Messages';

const HEADER_TITLE = 'Konfiguracja Profilu 2/3';
const MSG_TEXT =
  'Poniżej znajduje sie link do profilu facebook podany przy rejestracji. Potrzebny on jest do prawidłowego działania czatu.';

function ChatAgreementCard({ setDisplayMsgAlert }) {
  const { user } = useContext(LoginContext);
  const [msgLink, setMsgLink] = useState(user.messenger);
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });
  const [isFormatValid, setFormatValidity] = useState(
    checkFormatValidity(msgLink)
  );
  useEffect(() => {
    if (!isFormatValid) {
      setError({ isError: true, message: Messages.MSG_LINK_FORMAT });
    }
  });
  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={MSG_TEXT} />
        <MsgLinkView
          setError={setError}
          setMsgLink={setMsgLink}
          msgLink={msgLink}
          isFormatValid={isFormatValid}
          setFormatValidity={setFormatValidity}
        />
        {isFormatValid ? (
          <SmallInfoText
            text="Wprowadzony format linku jest poprawny"
            color="green"
          />
        ) : null}
        {hasErrorOccurred.isError ? (
          <SmallInfoText text={hasErrorOccurred.message} color="red" />
        ) : null}
        <MessengerButton
          setError={setError}
          msgLink={msgLink}
          isFormatValid={isFormatValid}
          setFormatValidity={setFormatValidity}
        />
        <ChatNavFooter
          msgLink={msgLink}
          setError={setError}
          setDisplayMsgAlert={setDisplayMsgAlert}
        />
      </CardContent>
    </Card>
  );
}

export default ChatAgreementCard;

ChatAgreementCard.propTypes = {
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
