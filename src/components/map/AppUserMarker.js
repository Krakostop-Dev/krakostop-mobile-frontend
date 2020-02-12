import { Marker } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../../modules/context/LoginContext';
import { MapContext } from '../../modules/context/MapContext';
import PairOverlay from './pairOverlay';

function AppUserMarker() {
  const appContext = useContext(LoginContext);
  const { user } = appContext;
  const mapContext = useContext(MapContext);

  const [isPairOverlayVisible, setIsPairOverlayVisible] = useState(false);

  return (
    <Marker
      coordinate={{
        latitude: mapContext.my_location.coords.latitude,
        longitude: mapContext.my_location.coords.longitude,
      }}
      onPress={() => setIsPairOverlayVisible(true)}
    >
      <Avatar size="medium" rounded source={user.avatar} activeOpacity={0.7} />
      <PairOverlay
        isVisible={isPairOverlayVisible}
        setIsVisible={setIsPairOverlayVisible}
      />
    </Marker>
  );
}

export default AppUserMarker;
