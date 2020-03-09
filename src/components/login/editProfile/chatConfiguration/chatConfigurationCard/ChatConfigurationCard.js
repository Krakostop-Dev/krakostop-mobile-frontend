import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../card/Card';
import CardHeader from '../../../../card/CardHeader';
import CardContent from '../../../../card/CardContent';
import InfoText from '../../../InfoText';
import SmallInfoText from '../../../../SmallInfoText';
import ChatNavFooter from './ChatNavFooter';
import { LoginContext } from '../../../../../modules/context/LoginContext';
import {
  checkFbProfileFormatValidity,
  createMsgLinkFromFbProfileLink,
} from '../../../../../modules/MessengerManager';
import Messages from '../../../../../modules/Messages';
import FacebookProfileLinkView from './FacebookProfileLinkView';
import CheckMessengerLinking from './checkMessengerLinkingView';

const HEADER_TITLE = 'Konfiguracja Profilu 2/3';
const CHAT_INFO_TEXT =
  'Poniżej znajduje sie link do profilu facebook podany przy rejestracji. Potrzebny on jest do prawidłowego działania czatu.';

function ChatConfigurationCard({ setDisplayMsgAlert }) {
  const { user } = useContext(LoginContext);
  const [msgLink, setMsgLink] = useState(user.messenger);
  const [fbProfileLink, setFbProfileLink] = useState(
    user.facebook ? user.facebook : ''
  );
  const [isFbLinkFormatValid, setFbLinkFormatValidity] = useState(false);

  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  function setMsgLinkIfFBLinkFormatIsValid(link) {
    const formatOk = checkFbProfileFormatValidity(link);
    setFbLinkFormatValidity(formatOk);
    setError({ isError: false, message: 'OK' });

    if (formatOk) {
      setMsgLink(createMsgLinkFromFbProfileLink(link));
    } else {
      setError({ isError: true, message: Messages.FB_LINK_FORMAT.error });
    }
  }

  useEffect(() => {
    setMsgLinkIfFBLinkFormatIsValid(fbProfileLink);
  }, []);
  return (
    <Card>
      <CardHeader title={HEADER_TITLE} />
      <CardContent>
        <InfoText infoText={CHAT_INFO_TEXT} />
        <FacebookProfileLinkView
          setMsgLinkIfFBLinkFormatIsValid={setMsgLinkIfFBLinkFormatIsValid}
          setError={setError}
          fbProfileLink={fbProfileLink}
          setFbProfileLink={setFbProfileLink}
          hasErrorOccurred={hasErrorOccurred}
        />
        {hasErrorOccurred.isError ? (
          <SmallInfoText text={hasErrorOccurred.message} color="red" />
        ) : null}
        {isFbLinkFormatValid ? (
          <CheckMessengerLinking msgLink={msgLink} />
        ) : null}

        <ChatNavFooter
          msgLink={msgLink}
          fbProfileLink={fbProfileLink}
          setError={setError}
          setDisplayMsgAlert={setDisplayMsgAlert}
        />
      </CardContent>
    </Card>
  );
}

export default ChatConfigurationCard;

ChatConfigurationCard.propTypes = {
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
