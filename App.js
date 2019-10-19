import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreenContainer from './src/views/loginScreen/LoginScreenContainer';
import AppNavigator from './src/components/AppNavigator';
import { AppContextProvider } from './src/components/context/AppContext';

export default function App() {
  return (
    <AppContextProvider>
      <AppNavigator />
    </AppContextProvider>
  );
}
