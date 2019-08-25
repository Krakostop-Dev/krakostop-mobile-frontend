import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreenComponent from "./src/loginScreen/LoginComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text style={{flex: 1}}>Open up App.js to start working on your app!</Text>*/}
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
