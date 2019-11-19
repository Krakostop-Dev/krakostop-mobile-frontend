import React from 'react';
import AppNavigator from './src/modules/navigation/AppNavigator';
import { LoginContextProvider } from './src/components/context/LoginContext';
import { MapContextProvider } from './src/components/context/MapContext';

export default function App() {
  return (
    <LoginContextProvider>
      <MapContextProvider>
        <AppNavigator />
      </MapContextProvider>
    </LoginContextProvider>
  );
}
