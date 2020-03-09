import React from 'react';
import { View, StyleSheet } from 'react-native';
import ConversationView from './ConversationView';

const AVATAR = require('../../../assets/hand.png');

const mockConversations = [
  {
    id: 1,
    avatar: AVATAR,
    name: 'Jan Kowalski',
    time: '19:43',
    date: '24.04',
  },
  {
    id: 2,
    avatar: AVATAR,
    name: 'Jan Kowalski',
    time: '19:43',
    date: '24.04',
  },
  {
    id: 3,
    avatar: AVATAR,
    name: 'Jan Kowalski',
    time: '19:43',
    date: '24.04',
  },
  {
    id: 4,
    avatar: AVATAR,
    name: 'Jan Kowalski',
    time: '19:43',
    date: '24.04',
  },
];

const styles = StyleSheet.create({
  container: { width: '90%', paddingTop: 7 },
});

function ChatView() {
  return (
    <View style={styles.container}>
      {mockConversations.map(conversation => (
        <ConversationView key={conversation.id} conversation={conversation} />
      ))}
    </View>
  );
}

export default ChatView;
