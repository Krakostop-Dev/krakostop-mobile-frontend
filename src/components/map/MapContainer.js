import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { MapContext } from '../../modules/context/MapContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapComponent from './MapComponent';
import startTrackingLocation from '../../modules/location/LocationTracker';
import refreshCurrentPosition from '../../modules/location/LocationRefresh';

const MapContainer = () => {
  const mapContext = useContext(MapContext);
  const [isLocationDataUpdated, setUpdateLocationStatus] = useState(false);

  useEffect(() => {
    let mounted = true;
    let locationPromise;
    const updateLocation = async () => {
      await mapContext.updateParticipantsLocation();
      locationPromise = await startTrackingLocation(newLocation =>
        mapContext.updateMyLocationWithCords(newLocation)
      );
      await refreshCurrentPosition(false);
      setUpdateLocationStatus(true);
    };
    if (mounted) {
      updateLocation();
    }
    return () => {
      mounted = false;
      locationPromise.then(remove => remove());
    };
  }, []);

  return (
    <View>
      {isLocationDataUpdated ? (
        <MapComponent participants={mapContext.participants} />
      ) : (
        <View style={ksBasic.stackContainer}>
          <Spinner color="red" />
        </View>
      )}
    </View>
  );
};

export default MapContainer;
