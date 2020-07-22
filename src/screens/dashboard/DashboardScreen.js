import React from 'react';
import MapContainer from '../../components/map/MapContainer';
import ScreenWithSearchBar from '../common/ScreenWithSearchBar';

const DashboardScreen = () => {
  return (
    <ScreenWithSearchBar>
      <MapContainer />
    </ScreenWithSearchBar>
  );
};

export default DashboardScreen;
