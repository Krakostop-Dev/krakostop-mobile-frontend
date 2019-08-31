import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreenComponent from "./src/loginScreen/LoginComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
