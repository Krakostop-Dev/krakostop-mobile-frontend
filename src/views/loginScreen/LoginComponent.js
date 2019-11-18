import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Spinner } from 'native-base';
import { googleSignIn } from '../../modules/LoginWithGoogle';
import { ksBasic } from '../../styles/basic/ksBasic';
import { LoginContext } from '../../components/context/LoginContext';

const logo = require('../../../assets/krakologo2019.png');
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
    <View style={ksBasic.stackContainer}>
      {isLoginButtonPressed ? (
        <Spinner color="red" />
      ) : (
        <View style={ksBasic.stack}>
          <Image style={styles.logo} source={logo} />
          <View style={styles.loginBtnContainer}>
            <TouchableWithoutFeedback onPress={loginPressed}>
              <Image style={styles.loginButton} source={loginButton} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  loginBtnContainer: {
    flex: 1,
  },
  loginButton: {
    flex: 0.2,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
});
