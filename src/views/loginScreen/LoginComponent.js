import React, { useContext, useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';
import googleSignIn from '../../modules/LoginWithGoogle';
import { ksBasic } from '../../styles/basic/ksBasic';
import { LoginContext } from '../../modules/context/LoginContext';

const LOGO = require('../../../assets/krk_logo.png');
const LOGIN_BUTTON = require('../../../assets/btn_google_signin_light_normal_web.png');
const LOGIN_BACKGROUND = require('../../../assets/login_background.png');

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack: {
    ...ksBasic.stack,
    justifyContent: 'space-between',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    flex: 0.5,
    resizeMode: 'contain',
    width: 300,
    height: 150,
  },
  loginBtnContainer: {
    flex: 0.5,
  },
  loginButton: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});

function LoginComponent({ navigation }) {
  const context = useContext(LoginContext);

  const [isLoginButtonPressed, loginButtonPressed] = useState(false);

  const loginPressed = async () => {
    loginButtonPressed(true);
    try {
      const { token, user } = await googleSignIn();
      if (token) {
        await context.logIn(token, user);
        navigation.navigate('EditProfileScreen');
      } else {
        console.error('TOKEN IS NULL');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ImageBackground source={LOGIN_BACKGROUND} style={styles.background}>
      <View style={styles.container}>
        {isLoginButtonPressed ? (
          <Spinner color="red" />
        ) : (
          <View style={styles.stack}>
            <Image style={styles.logo} source={LOGO} />
            <View style={styles.loginBtnContainer}>
              <TouchableWithoutFeedback onPress={loginPressed}>
                <Image style={styles.loginButton} source={LOGIN_BUTTON} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

export default LoginComponent;

LoginComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
