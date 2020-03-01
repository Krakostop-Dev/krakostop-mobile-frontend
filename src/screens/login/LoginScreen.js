import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';
import LoginForm from '../../components/login/loginForm/LoginForm';
import { ksStyle } from '../../styles/basic/ksBasic';

const BACKGROUND_IMAGE = require('../../../assets/login_background.png');

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1.0,
    alignItems: 'center',
  },
  stack: {
    width: '90%',
    marginTop: 100,
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 300,
    height: 150,
  },
});

function LoginScreen() {
  const [isLoginButtonPressed, loginButtonPressed] = useState(false);
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
      {isLoginButtonPressed ? (
        <Spinner color="red" />
      ) : (
        <View style={styles.container}>
          <View style={styles.stack}>
            <Image style={styles.logo} source={ksStyle.logo.source} />
            <LoginForm loginButtonPressed={loginButtonPressed} />
          </View>
        </View>
      )}
    </ImageBackground>
  );
}

export default LoginScreen;

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
