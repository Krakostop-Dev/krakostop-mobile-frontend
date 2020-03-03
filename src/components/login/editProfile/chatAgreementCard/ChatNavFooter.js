import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginContext } from '../../../../modules/context/LoginContext';
import { updateProfileOnServer } from '../../../../modules/communication/CommunicationMenager';
import NavigationFooter from '../NavigationFooter';

function EditAvatarNavFooter({ msgLink, setError }) {
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
    navigation.navigate('MsgAlert');
  }

  return <NavigationFooter nextButtonOnPress={onPress} />;
}

export default EditAvatarNavFooter;

EditAvatarNavFooter.propTypes = {
  msgLink: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
