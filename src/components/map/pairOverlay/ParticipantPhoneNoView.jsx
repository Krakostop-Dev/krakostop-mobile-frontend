import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
});

function ParticipantPhoneNoView() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={4}>
        tel. 882 301 499
      </Text>
    </View>
  );
}

export default ParticipantPhoneNoView;
