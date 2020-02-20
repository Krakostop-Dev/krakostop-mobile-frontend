import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ParticipantAvatarView from './ParticipantAvatarView';
import ParticipantNameView from './ParticipantNameView';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 5,
  },
});

function ParticipantView() {
  return (
    <View style={styles.container}>
      <ParticipantNameView />
      <ParticipantAvatarView />
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            textAlign: 'center',
            flex: 1,
            flexWrap: 'wrap',
            fontFamily: 'sans-serif',
            flexShrink: 1,
          }}
          numberOfLines={4}
        >
          tel. 882 301 499
        </Text>
      </View>
    </View>
  );
}

export default ParticipantView;
