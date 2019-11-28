import React, { useEffect, useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LoginContext } from '../../modules/context/LoginContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import { MapContext } from '../../modules/context/MapContext';

const logo = require('../../../assets/krakologo2019.png');

const SplashScreen = ({ navigation }) => {
  const appContext = useContext(LoginContext);
  const mapContext = useContext(MapContext);

  async function refreshLogin() {
    try {
      await appContext.refreshLogin();
      await mapContext.grantMapPermissions();
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      if (appContext.isLoggedIn) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    }, 1000);
  }

  useEffect(() => {
    refreshLogin();
  }, []);

  return (
    <View style={ksBasic.stackContainer}>
      <View style={ksBasic.stack}>
        <Image style={styles.logo} source={logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});
export default SplashScreen;
