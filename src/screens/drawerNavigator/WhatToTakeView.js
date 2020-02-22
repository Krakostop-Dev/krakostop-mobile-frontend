import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: 'red',
  },
});

function WhatToTake() {
  return (
    <View style={styles.container}>
      <Text>What to take</Text>
    </View>
  );
}

export default WhatToTake;
