import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: 'red',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <Text>Contact View</Text>
    </View>
  );
};
