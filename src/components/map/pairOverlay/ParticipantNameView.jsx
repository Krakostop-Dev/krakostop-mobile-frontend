import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
});

function ParticipantNameView() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={10} style={styles.text}>
        Jan Kowalski
      </Text>
    </View>
  );
}

export default ParticipantNameView;
