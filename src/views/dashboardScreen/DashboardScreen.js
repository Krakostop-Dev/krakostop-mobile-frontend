import React, { useContext } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { AppContext } from '../../components/context/AppContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapContainer from '../../components/map/MapContainer';

const DashboardScreen = ({ navigation }) => {
  const context = useContext(AppContext);
  const _logoutPressed = async () => {
    await context.logOut();
    navigation.navigate('AuthLoading');
  };

  return (
    <View style={ksBasic.stackContainer}>
      <View style={ksBasic.stack}>
        <MapContainer />
      </View>
    </View>
  );
};

export default DashboardScreen;
