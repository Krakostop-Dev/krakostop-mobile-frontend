import React, { useContext, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import LoginForm from './LoginForm';
import { LoginContext } from '../../modules/context/LoginContext';
import { Spinner } from 'native-base';
import { mock } from '../../mock';
import LoginWithEmail from '../../modules/login/LoginWithEmail';

const logo = require('../../../assets/krk_logo.png');

export default function({ navigation }) {
  const context = useContext(LoginContext);

  const [isLoginButtonPressed, loginButtonPressed] = useState(false);

  const loginPressed = async (email, pairID) => {
    console.log('EMAIL: ' + email + ' PAIR ID ' + pairID);
    loginButtonPressed(true);
    try {
      const { token, user } = await LoginWithEmail(email, pairID);
      //TODO: Change mock to proper values
      if (mock.token) {
        await context.logIn(mock.token, mock.user);
        navigation.navigate('EditProfileScreen');
      } else {
        console.error('Token is null');
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
      {isLoginButtonPressed ? (
        <Spinner color="red" />
      ) : (
        <View style={styles.container}>
          <View style={styles.stack}>
            <Image style={styles.logo} source={logo} />
            <LoginForm onClick={loginPressed} />
          </View>
        </View>
      )}
    </ImageBackground>
  );
}

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
    marginTop: 100,
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logo: {
    resizeMode: 'contain',
    width: 300,
    height: 150,
  },
});
