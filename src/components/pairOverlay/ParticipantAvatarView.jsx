import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const PARTICIPANT_AVATAR = require('../../../assets/hand.png');
const MESSENGER_ICON = require('../../../assets/messenger.png');

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

function ParticipantAvatarView() {
  return (
    <View style={styles.container}>
      <Avatar
        size={110}
        rounded
        source={PARTICIPANT_AVATAR}
        activeOpacity={0.7}
      />
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
