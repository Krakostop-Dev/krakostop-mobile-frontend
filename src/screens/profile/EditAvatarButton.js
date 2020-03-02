import React, { useContext } from 'react';
import { StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import EditButton from '../../components/EditButton';
import {
  convertRelativePathToAbsoluteUri,
  loadImage,
} from '../../modules/ImageLoader';
import { LoginContext } from '../../modules/context/LoginContext';
import { updateProfileOnServer } from '../../modules/communication/CommunicationMenager';

const styles = StyleSheet.create({
  edit_avatar_button: {
    position: 'absolute',
    height: 35,
    width: 35,
    top: 75,
    right: -5,
  },
});

function EditAvatarButton({ style, setError }) {
  const loginContext = useContext(LoginContext);

  async function onPress() {
    const avatar = await loadImage();
    if (avatar) {
      const { status, message, user } = await updateProfileOnServer({
        avatar: avatar.uri,
      });
      if (status === 200) {
        user.avatar = convertRelativePathToAbsoluteUri(user.avatar);
        await loginContext.updateUser(user);
      } else {
        setError({ isError: true, message });
      }
    }
  }

  return (
    <EditButton
      style={{ ...styles.edit_avatar_button, ...style }}
      onPress={onPress}
      rounded
    />
  );
}

export default EditAvatarButton;

EditAvatarButton.defaultProps = {
  style: {},
};

EditAvatarButton.propTypes = {
  style: ViewPropTypes.style,
  setError: PropTypes.func.isRequired,
};
