import React, { createContext } from 'react';
import { reducer } from './MapContextReducer';
import KsAxios from '../../modules/KsAxios';

export const MapContext = createContext({
    my_location: null,
    participants: null
});

const initialState = {
    my_location: {
        coords:{
            latitude: 0,
            longitude: 0
        }
    },
    participants: [],
    isMapPermissionsGranted: false
};

async function updateMyLocation(dispatch, location) {
    //TODO Send location to backend
    dispatch({type: 'updateMyLocation', payload: location,})
}

export const MapContextProvider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <MapContext.Provider
            value={{
                ...state,
                updateMyLocation: async (location) => await updateMyLocation(dispatch, location),
            }}
        >
            {props.children}
        </MapContext.Provider>
    );
};
