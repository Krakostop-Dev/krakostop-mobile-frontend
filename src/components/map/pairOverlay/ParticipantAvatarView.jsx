import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';
import { convertRelativePathToAbsoluteUri } from '../../../modules/ImageLoader';

const PARTICIPANT_AVATAR = require('../../../../assets/hand.png');
const MESSENGER_ICON = require('../../../../assets/messenger.png');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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

function ParticipantAvatarView({ avatar }) {
  const [loadedAvatar, setLoadedAvatar] = useState(PARTICIPANT_AVATAR);

  useEffect(() => {
    setLoadedAvatar(convertRelativePathToAbsoluteUri(avatar));
  }, []);

  return (
    <View style={styles.container}>
      <Avatar size={110} rounded source={loadedAvatar} activeOpacity={0.7} />
      <TouchableOpacity
        onPress={() => console.log('messenger clicked :)')}
        style={styles.opacity}
      >
        <Image style={styles.image} source={MESSENGER_ICON} />
      </TouchableOpacity>
    </View>
  );
}

export default ParticipantAvatarView;

ParticipantAvatarView.defaultProps = {
  avatar: { PARTICIPANT_AVATAR },
};

ParticipantAvatarView.propTypes = {
  avatar: PropTypes.string,
};
