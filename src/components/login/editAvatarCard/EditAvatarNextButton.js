import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginContext } from '../../../modules/context/LoginContext';
import { updateProfileOnServer } from '../../../modules/communication/CommunicationMenager';
import { convertRelativePathToAbsoluteUri } from '../../../modules/ImageLoader';
import NextButton from '../../NextButton';

const BUTTON_LABEL = 'Dalej';

function EditAvatarNextButton({ avatar, setError }) {
  const navigation = useContext(NavigationContext);
  const loginContext = useContext(LoginContext);

  async function onPress() {
    if (avatar) {
      const { status, message, user } = await updateProfileOnServer({
        avatar,
      });
      if (status === 200) {
        user.avatar = convertRelativePathToAbsoluteUri(user.avatar);
        await loginContext.updateUser(user);
        navigation.navigate('EditProfile2');
      } else {
        setError({
          isError: true,
          message,
        });
      }
    }
    navigation.navigate('EditProfile2');
  }

  return <NextButton label={BUTTON_LABEL} onPress={onPress} />;
}

export default EditAvatarNextButton;

EditAvatarNextButton.propTypes = {
  avatar: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
};
