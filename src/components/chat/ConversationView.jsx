import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Linking } from 'expo';
import ConversationAvatarView from './ConversationAvatarView';
import ConversationNameView from './ConversationNameView';
import ConversationTimeDateView from './ConversationTimeDateView';

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
});

function ConversationView({ conversation }) {
  async function conversationOnPress() {
    await Linking.openURL(conversation.messenger);
  }

  return (
    <TouchableOpacity onPress={conversationOnPress} style={styles.touchable}>
      <ConversationAvatarView avatar={conversation.avatar} />
      <ConversationNameView name={conversation.name} />
      <ConversationTimeDateView
        time={conversation.time}
        date={conversation.date}
      />
    </TouchableOpacity>
  );
}

export default ConversationView;

ConversationView.propTypes = {
  conversation: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    messenger: PropTypes.string.isRequired,
  }).isRequired,
};
