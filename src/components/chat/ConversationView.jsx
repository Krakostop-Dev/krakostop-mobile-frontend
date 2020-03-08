import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
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
  return (
    <TouchableOpacity
      onPress={() => console.log('messenger clicked')}
      style={styles.touchable}
    >
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
  }).isRequired,
};
