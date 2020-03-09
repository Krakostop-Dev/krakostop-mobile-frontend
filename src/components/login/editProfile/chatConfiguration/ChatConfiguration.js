import React, { useState } from 'react';
import MsgAlert from './msgAlert/MsgAlert';
import ChatConfigurationCard from './chatConfigurationCard';

function ChatConfiguration() {
  const [displayMsgAlert, setDisplayMsgAlert] = useState(false);

  return displayMsgAlert ? (
    <MsgAlert setDisplayMsgAlert={setDisplayMsgAlert} />
  ) : (
    <ChatConfigurationCard setDisplayMsgAlert={setDisplayMsgAlert} />
  );
}

export default ChatConfiguration;
