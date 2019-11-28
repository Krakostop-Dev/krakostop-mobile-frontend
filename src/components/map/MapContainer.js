import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import { MapContext } from '../../modules/context/MapContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapComponent from './MapComponent';

const MapContainer = () => {
  const mapContext = useContext(MapContext);
  const [isLocationDataUpdated, setUpdateLocationStatus] = useState(false);

  useEffect(() => {
    const updateLocation = async () => {
      await mapContext.updateMyLocation();
      await mapContext.updateParticipantsLocation();
      setUpdateLocationStatus(true);
    };
    updateLocation();
  }, []);

 return (
     <View>
      {isLocationDataUpdated ? <MapComponent/> :
      <View style={ksBasic.stackContainer}>
        <Spinner color="red"/>
      </View>
      }
    </View>
  );
};


export default MapContainer;
