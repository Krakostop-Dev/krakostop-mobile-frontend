import React, { useState } from 'react';
import MsgAlert from './msgAlert/MsgAlert';
import ChatAgreementCard from './chatAgreementCard';

function ChatAgreement() {
  const [displayMsgAlert, setDisplayMsgAlert] = useState(false);

  return displayMsgAlert ? (
    <MsgAlert setDisplayMsgAlert={setDisplayMsgAlert} />
  ) : (
    <ChatAgreementCard setDisplayMsgAlert={setDisplayMsgAlert} />
  );
}

export default ChatAgreement;
