import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ChatView from '../../components/chat/ChatView';
import { ksStyle } from '../../styles/basic/ksBasic';
import ScreenWithSearchBar from '../common/ScreenWithSearchBar';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: ksStyle.colors.primaryColorLight,
    zIndex: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function ChatScreen() {
  return (
    <ScreenWithSearchBar>
      <View style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <ChatView />
          </View>
        </ScrollView>
      </View>
    </ScreenWithSearchBar>
  );
}

export default ChatScreen;
