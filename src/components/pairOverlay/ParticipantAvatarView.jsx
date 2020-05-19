import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';
import { convertRelativePathToAbsoluteUri } from '../../modules/ImageLoader';
import { redirectToMessenger } from '../../modules/MessengerManager';
import Images from '../../../assets/Images';

const PARTICIPANT_AVATAR = Images.others.avatar_mock;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
    height: 120,
  },
  opacity: {
    position: 'absolute',
    zIndex: 5,
    bottom: 0,
    right: 0,
  },
  image: {
    width: 50,
    height: 50,
  },
});

function ParticipantAvatarView({ avatar, messenger }) {
  const [loadedAvatar, setLoadedAvatar] = useState(Images.others.avatar_mock);

  useEffect(() => {
    if (avatar) {
      setLoadedAvatar(convertRelativePathToAbsoluteUri(avatar));
    }
  }, []);

  return (
    <View style={styles.container}>
      <Avatar size={110} rounded source={loadedAvatar} activeOpacity={0.7} />
      <TouchableOpacity
        onPress={() => redirectToMessenger(messenger)}
        style={styles.opacity}
      >
        <Image style={styles.image} source={Images.icons.messenger} />
      </TouchableOpacity>
    </View>
  );
}

export default ParticipantAvatarView;

ParticipantAvatarView.defaultProps = {
  avatar: { PARTICIPANT_AVATAR },
  messenger: null,
};

ParticipantAvatarView.propTypes = {
  avatar: PropTypes.string,
  messenger: PropTypes.string,
};
