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
    let locationPromise;
    const updateLocation = async () => {
      await mapContext.updateParticipantsLocation();
      locationPromise = await startTrackingLocation(newLocation =>
        mapContext.updateMyLocationWithCords(newLocation)
      );
      await refreshCurrentPosition(false);
      setUpdateLocationStatus(true);
    };
    updateLocation();
    return () => {
      locationPromise.then(remove => remove());
    };
  }, []);

  return (
    <View>
      {isLocationDataUpdated ? (
        <MapComponent />
      ) : (
        <View style={ksBasic.stackContainer}>
          <Spinner color="red" />
        </View>
      )}
    </View>
  );
};

export default MapContainer;
