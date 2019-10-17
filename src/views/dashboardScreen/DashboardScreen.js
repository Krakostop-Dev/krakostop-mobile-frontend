import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const DashboardScreen = ({ context, navigation }) => {
  const _logoutPressed = async () => {
    console.log('logOut');
    await context.logOut();
    navigation.navigate('AuthLoading');
  };

  return (
    <View style={styles.colsContainer}>
      <View style={styles.sideColumn} />
      <View style={styles.middleColumn}>
        <TouchableWithoutFeedback onPress={_logoutPressed}>
          <Text style ={styles.mainText}>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.sideColumn} />
    </View>
  );
};

const styles = StyleSheet.create({
  colsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8FC6B1',
  },
  middleColumn: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sideColumn: {
    flex: 1,
  },
  mainText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10
  },
});

export default DashboardScreen;
