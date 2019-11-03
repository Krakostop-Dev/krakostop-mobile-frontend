import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { AppContextProvider } from './src/components/context/AppContext';
import { MapContextProvider } from './src/components/context/MapContext';

export default function App() {
  return (
    <AppContextProvider>
      <MapContextProvider>
        <AppNavigator />
      </MapContextProvider>
    </AppContextProvider>
  );
}
