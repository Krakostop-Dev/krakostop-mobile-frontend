import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParticipantAvatarView from './ParticipantAvatarView';
import ParticipantNameView from './ParticipantNameView';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

function ParticipantView() {
  return (
    <View style={styles.container}>
      <ParticipantNameView />
      <ParticipantAvatarView />
    </View>
  );
}

export default ParticipantView;
