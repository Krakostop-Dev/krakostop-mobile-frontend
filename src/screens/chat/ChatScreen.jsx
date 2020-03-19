import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainHeader from '../../components/header/MainHeader';
import ChatView from '../../components/chat/ChatView';
import { ksBasic, ksStyle } from '../../styles/basic/ksBasic';
import CustomizedSearchBarOverlay from '../../components/searchBar';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: ksStyle.colors.primaryColorLight,
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  view: {
    ...ksBasic.stackContainer,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

function ChatScreen({ navigation }) {
  return (
    <View>
      <MainHeader navigation={navigation} />
      <CustomizedSearchBarOverlay />

      <View style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <ChatView />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default ChatScreen;

ChatScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
