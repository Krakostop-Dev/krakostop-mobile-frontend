import React, { useState } from 'react';
import ResignationAlert from './resignationAlert/ResignationAlert';
import ChatConfigurationCard from './chatConfigurationCard';

function ChatConfiguration() {
  const [displayMsgAlert, setDisplayMsgAlert] = useState(false);

  return displayMsgAlert ? (
    <ResignationAlert setDisplayMsgAlert={setDisplayMsgAlert} />
  ) : (
    <ChatConfigurationCard setDisplayMsgAlert={setDisplayMsgAlert} />
  );
}

export default ChatConfiguration;
