import React, { useEffect, useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { LoginContext } from '../../modules/context/LoginContext';
import { ksBasic } from '../../styles/basic/ksBasic';
import { MapContext } from '../../modules/context/MapContext';

const LOGO = require('../../../assets/krakologo2019.png');

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});

const SplashScreen = ({ navigation }) => {
  const appContext = useContext(LoginContext);

  async function refreshLogin() {
    try {
      await appContext.refreshLogin();
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
        <Image style={styles.logo} source={LOGO} />
      </View>
    </View>
  );
};

export default SplashScreen;

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
