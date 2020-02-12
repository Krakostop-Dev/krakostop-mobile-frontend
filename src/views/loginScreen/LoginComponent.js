import React, { useContext, useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Spinner } from 'native-base';
import { googleSignIn } from '../../modules/LoginWithGoogle';
import { ksBasic } from '../../styles/basic/ksBasic';
import { LoginContext } from '../../modules/context/LoginContext';

const logo = require('../../../assets/krk_logo.png');
const loginButton = require('../../../assets/btn_google_signin_light_normal_web.png');

export default function({ navigation }) {
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
    <ImageBackground
      source={require('../../../assets/login_background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        {isLoginButtonPressed ? (
          <Spinner color="red" />
        ) : (
          <View style={styles.stack}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.loginBtnContainer}>
              <TouchableWithoutFeedback onPress={loginPressed}>
                <Image style={styles.loginButton} source={loginButton} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

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
