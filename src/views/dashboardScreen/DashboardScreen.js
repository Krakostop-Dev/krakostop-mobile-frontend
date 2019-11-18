import React, { useContext } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { LoginContext } from '../../components/context/LoginContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import MapContainer from '../../components/map/MapContainer';

const DashboardScreen = ({ navigation }) => {
  const context = useContext(LoginContext);
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
