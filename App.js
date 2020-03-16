import React from 'react';
import MainNavigator from './src/modules/navigation/MainNavigator';
import LoginContextProvider from './src/modules/context/LoginContext';
import { MapContextProvider } from './src/modules/context/MapContext';
import SearchContextProvider from './src/modules/context/SearchContext';

export default function App() {
  return (
    <LoginContextProvider>
      <MapContextProvider>
        <SearchContextProvider>
          <MainNavigator />
        </SearchContextProvider>
      </MapContextProvider>
    </LoginContextProvider>
  );
}
