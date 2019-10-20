import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { AppContextProvider } from './src/components/context/AppContext';

export default function App() {
  return (
    <AppContextProvider>
      <AppNavigator />
    </AppContextProvider>
  );
}
