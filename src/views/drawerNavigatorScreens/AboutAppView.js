import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>About App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: 'red',
  },
});
