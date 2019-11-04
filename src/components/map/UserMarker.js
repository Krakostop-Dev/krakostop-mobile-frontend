import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MapContext } from '../context/MapContext';

const UserMarker = ({}) => {
  const appContext = useContext(AppContext);
  const { user } = appContext;
  const mapContext = useContext(MapContext);
  return (
    <Marker
      coordinate={{
        latitude: mapContext.my_location.coords.latitude,
        longitude: mapContext.my_location.coords.longitude,
      }}
      onPress={console.log('Marker works')}
    >
      <Avatar size="medium" rounded source={user.avatar} activeOpacity={0.7} />
    </Marker>
  );
};

export default UserMarker;
