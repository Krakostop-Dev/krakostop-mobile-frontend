import React, { useContext } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { AppContext } from '../../components/context/AppContext';
import { ksBasic } from '../../styles/basic/ksBasic';

const DashboardScreen = ({ navigation }) => {
  const context = useContext(AppContext);
  const _logoutPressed = async () => {
    await context.logOut();
    navigation.navigate('AuthLoading');
  };

  return (
    <View style={ksBasic.stackContainer}>
      <View style={ksBasic.stack}>
        <TouchableWithoutFeedback onPress={_logoutPressed}>
          <Text style={ksBasic.mediumText}>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default DashboardScreen;
