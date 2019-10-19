import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logo = require('../../../assets/krakologo2019.png');

const SplashScreen = ({ context, navigation }) => {
    async function refreshLogin(){
        try {
            await context.refreshLogin();
        } catch (e) {
            console.error(e);
        }
        setTimeout(() => {
            if (context.isLoggedIn) {
                navigation.navigate('App');
            } else {
                navigation.navigate('Auth');
            }
        }, 1000);
    }


    useEffect( () => {
        refreshLogin()
    }        , []);

  return (
    <View style={styles.colsContainer}>
      <View style={styles.sideColumn} />
      <View style={styles.middleColumn}>
        <Image style={styles.logo} source={logo} />
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
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});
export default SplashScreen;
