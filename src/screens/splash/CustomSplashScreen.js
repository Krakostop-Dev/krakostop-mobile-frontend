/* eslint global-require: 0 */
import React, { useContext, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationContext } from 'react-navigation';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import { LoginContext } from '../../modules/context/LoginContext';
import Images from '../../../assets/Images';

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
});

const MINIMAL_SPLASH_SCREEN_SHOW_TIME = 2000;

const CustomSplashScreen = () => {
  const loginContext = useContext(LoginContext);
  const navigation = useContext(NavigationContext);
  const [isSplashReady, setIsSplashReady] = useState(false);
  const loadTime = Date.now();

  function navigateUser(isUserLoggedIn) {
    if (isUserLoggedIn) {
      navigation.navigate('App');
    } else {
      navigation.navigate('Auth');
    }
  }

  async function refreshLogin() {
    const isUserLoggedIn = await loginContext.refreshLogin();
    const nowTime = Date.now();
    const splashScreenShowTime = nowTime - loadTime;
    const remainingShowTime =
      MINIMAL_SPLASH_SCREEN_SHOW_TIME - splashScreenShowTime;
    if (remainingShowTime > 0) {
      setTimeout(() => navigateUser(isUserLoggedIn), remainingShowTime);
    } else {
      navigateUser(isUserLoggedIn);
    }
    SplashScreen.hide();
  }

  async function cacheResourcesAsync() {
    const images = Images.backgrounds;

    const cacheImages = Object.keys(images).map(key => {
      return Asset.fromModule(images[key]).downloadAsync();
    });

    await Promise.all(cacheImages);
  }

  async function executeSplashScreenResponsibilities() {
    await cacheResourcesAsync();
    await refreshLogin();
  }

  async function cacheSplashResourcesAsync() {
    const gif = require('../../../assets/splash.gif');
    return Asset.fromModule(gif).downloadAsync();
  }

  if (isSplashReady) {
    return (
      <AppLoading
        startAsync={cacheSplashResourcesAsync}
        onFinish={() => setIsSplashReady(true)}
        onError={console.warn}
        autoHideSplash={false}
      />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.logo}
        source={require('../../../assets/splash.gif')}
        onLoad={executeSplashScreenResponsibilities}
      />
    </View>
  );
};

export default CustomSplashScreen;
