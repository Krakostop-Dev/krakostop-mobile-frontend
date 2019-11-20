import React from 'react';
import MainNavigator from './src/modules/navigation/MainNavigator';
import { LoginContextProvider } from './src/modules/context/LoginContext';
import { MapContextProvider } from './src/modules/context/MapContext';

export default function App() {
  return (
    <LoginContextProvider>
      <MapContextProvider>
        <MainNavigator />
      </MapContextProvider>
    </LoginContextProvider>
  );
}
