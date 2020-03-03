import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginContext } from '../../../../../modules/context/LoginContext';
import { updateProfileOnServer } from '../../../../../modules/communication/CommunicationMenager';
import NavigationFooter from '../../NavigationFooter';

function ChatNavFooter({ msgLink, setError, setDisplayMsgAlert }) {
  const navigation = useContext(NavigationContext);
  const loginContext = useContext(LoginContext);

  async function onPress() {
    if (msgLink) {
      const { status, message, user } = await updateProfileOnServer({
        msgLink,
      });
      if (status === 200) {
        await loginContext.updateUser(user);
        navigation.navigate('EditProfile3');
      } else {
        setError({
          isError: true,
          message,
        });
      }
    }
    setDisplayMsgAlert(true);
  }

  return <NavigationFooter nextButtonOnPress={onPress} />;
}

export default ChatNavFooter;

ChatNavFooter.propTypes = {
  msgLink: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  setDisplayMsgAlert: PropTypes.func.isRequired,
};
