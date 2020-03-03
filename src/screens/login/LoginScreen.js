import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';
import LoginForm from '../../components/login/auth/loginForm/LoginForm';

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
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
