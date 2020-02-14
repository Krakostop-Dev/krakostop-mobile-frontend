import React, {createContext} from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import PropTypes from 'prop-types';
import reducer from './MapContextReducer';
import KsAxios from '../KsAxios';
import {refreshCurrentPosition} from "../location/LocationRefresh";

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

async function updateMyLocation(dispatch, state) {
  const location = await refreshCurrentPosition();
  try {
    await KsAxios.post('/api/v1/locations', {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  } catch (e) {
    console.error(e);
  }
  dispatch({type: 'updateMyLocation', payload: {location}});
}

async function updateMyLocationWithCords(newLocation, dispatch, state) {
  dispatch({type: 'updateMyLocation', payload: {location: newLocation}});
}


async function updateParticipantsLocation(dispatch) {
  try {
    const response = await KsAxios.get('/api/v1/locations/latest');
    dispatch({type: 'updateParticipantsLocation', payload: response.data});
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
        updateMyLocation: async () => updateMyLocation(dispatch, state),
        updateMyLocationWithCords: (newLocation) => updateMyLocationWithCords(newLocation, dispatch, state),
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
