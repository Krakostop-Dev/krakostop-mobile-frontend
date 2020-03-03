import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginContext } from '../../../modules/context/LoginContext';
import { updateProfileOnServer } from '../../../modules/communication/CommunicationMenager';
import NextButton from '../../NextButton';

const BUTTON_LABEL = 'Dalej';

function EditAvatarNextButton({ msgLink, setError }) {
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

  return <NextButton label={BUTTON_LABEL} onPress={onPress} />;
}

export default EditAvatarNextButton;

EditAvatarNextButton.propTypes = {
  msgLink: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
