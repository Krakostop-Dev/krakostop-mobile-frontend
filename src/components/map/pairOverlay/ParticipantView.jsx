import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ParticipantAvatarView from './ParticipantAvatarView';
import ParticipantNameView from './ParticipantNameView';
import ParticipantPhoneNoView from './ParticipantPhoneNoView';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

function ParticipantView({ user }) {
  return (
    <View style={styles.container}>
      <ParticipantNameView user={user} />
      <ParticipantAvatarView avatar={user.avatar} />
      <ParticipantPhoneNoView phone={user.phone} />
    </View>
  );
}

export default ParticipantView;

ParticipantView.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
