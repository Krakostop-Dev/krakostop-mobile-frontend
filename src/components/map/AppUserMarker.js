import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import { LoginContext } from '../../modules/context/LoginContext';
import { MapContext } from '../../modules/context/MapContext';

const AppUserMarker = () => {
  const appContext = useContext(LoginContext);
  const { user } = appContext;
  const mapContext = useContext(MapContext);
  return (
    <Marker
      coordinate={{
        latitude: mapContext.my_location.coords.latitude,
        longitude: mapContext.my_location.coords.longitude,
      }}
    >
      <Avatar size="medium" rounded source={user.avatar} activeOpacity={0.7} />
    </Marker>
  );
};

export default AppUserMarker;
