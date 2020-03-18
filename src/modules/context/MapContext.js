import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import reducer from './MapContextReducer';
import refreshCurrentPosition from '../location/LocationRefresh';
import {
  getLatestParticipantLocationsFromServer,
  sendLocationToServer,
} from '../communication/CommunicationMenager';

export const MapContext = createContext({
  my_location: null,
  participants: null,
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

// eslint-disable-next-line no-unused-vars
async function updateMyLocation(dispatch, state) {
  const location = await refreshCurrentPosition();
  sendLocationToServer(location);
  dispatch({ type: 'updateMyLocation', payload: { location } });
}

// eslint-disable-next-line no-unused-vars
async function updateMyLocationWithCords(newLocation, dispatch, state) {
  sendLocationToServer(newLocation);
  dispatch({ type: 'updateMyLocation', payload: { location: newLocation } });
}

async function updateParticipantsLocation(dispatch) {
  try {
    const pairs = await getLatestParticipantLocationsFromServer();
    dispatch({ type: 'updateParticipantsLocation', payload: pairs });
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
        updateMyLocationWithCords: newLocation =>
          updateMyLocationWithCords(newLocation, dispatch, state),
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
