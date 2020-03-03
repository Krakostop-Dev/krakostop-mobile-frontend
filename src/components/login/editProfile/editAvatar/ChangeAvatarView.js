import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';
import EditButton from '../../../EditButton';
import { loadImage } from '../../../../modules/ImageLoader';
import OkButton from './OkButton';
import { LoginContext } from '../../../../modules/context/LoginContext';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label_container: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 50,
    right: -5,
  },
  label: {
    marginRight: 5,
    fontSize: 18,
  },
});

function ChangeAvatarView({ setAvatar }) {
  const { user } = useContext(LoginContext);

  const [loadedAvatar, setLoadedAvatar] = useState(null);
  async function onPress() {
    const avatar = await loadImage();
    if (avatar) {
      setLoadedAvatar(avatar);
      setAvatar(avatar.uri);
    }
  }

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        containerStyle={styles.avatar}
        source={loadedAvatar ? { uri: loadedAvatar.uri } : user.avatar}
      />
      {loadedAvatar ? (
        <OkButton onPress={onPress} style={styles.button} />
      ) : (
        <EditButton onPress={() => onPress()} style={styles.button} rounded />
      )}
    </View>
  );
}

export default ChangeAvatarView;

ChangeAvatarView.propTypes = {
  setAvatar: PropTypes.func.isRequired,
};
