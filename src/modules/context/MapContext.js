import React, { createContext } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import PropTypes from 'prop-types';
import reducer from './MapContextReducer';
import KsAxios from '../KsAxios';

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

async function updateMyLocation(dispatch, state) {
  if (!state.isMapPermissionsGranted) {
    await grantMapPermissions(dispatch);
  }
  // TODO: Working in background
  const location = await Location.getCurrentPositionAsync({});

  try {
    await KsAxios.post('/api/v1/locations', {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  } catch (e) {
    console.error(e);
  }
  dispatch({ type: 'updateMyLocation', payload: { location } });
}

async function updateParticipantsLocation(dispatch) {
  try {
    const response = await KsAxios.get('/api/v1/locations/latest');
    dispatch({ type: 'updateParticipantsLocation', payload: response.data });
  } catch (e) {
    console.error(e);
  }
}

export const MapContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <MapContext.Provider
      value={{
        ...state,
        grantMapPermissions: async () => grantMapPermissions(dispatch),
        updateMyLocation: async () => updateMyLocation(dispatch, state),
        updateParticipantsLocation: async () =>
          updateParticipantsLocation(dispatch),
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

MapContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
