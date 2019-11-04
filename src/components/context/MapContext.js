import React, { createContext } from 'react';
import * as Permissions from 'expo-permissions';
import { reducer } from './MapContextReducer';

export const MapContext = createContext({
  my_location: null,
  participants: null,
  isMapPermissionsGranted: false,
});

const initialState = {
  my_location: {
    coords: {
      latitude: 0,
      longitude: 0,
    },
  },
  participants: [],
};

async function grantMapPermissions(dispatch) {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    dispatch({ type: 'changeMapPermissions', payload: false });
    console.error('Permission to access location was denied');
  } else {
    dispatch({ type: 'changeMapPermissions', payload: true });
  }
}

async function updateMyLocation(dispatch, location) {
  // TODO Send location to backend
  dispatch({ type: 'updateMyLocation', payload: location });
}

export const MapContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <MapContext.Provider
      value={{
        ...state,
        grantMapPermissions: async () => await grantMapPermissions(dispatch),
        updateMyLocation: async location =>
          await updateMyLocation(dispatch, location),
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};
