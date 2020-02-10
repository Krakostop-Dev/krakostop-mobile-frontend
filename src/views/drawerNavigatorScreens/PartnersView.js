import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Partners</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    backgroundColor: 'red',
  },
});
