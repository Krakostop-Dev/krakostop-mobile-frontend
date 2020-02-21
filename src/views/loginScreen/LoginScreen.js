import React, { useContext, useState } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { LoginContext } from '../../modules/context/LoginContext';
import mock from '../../mock';
import LoginWithEmail from '../../modules/login/LoginWithEmail';
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

function LoginScreen({ navigation }) {
  const context = useContext(LoginContext);

  const [isLoginButtonPressed, loginButtonPressed] = useState(false);

  const loginPressed = async (email, pairNr) => {
    console.log(`EMAIL: ${email} PAIR ID ${pairNr}`);
    loginButtonPressed(true);
    try {
      const { token, user } = await LoginWithEmail(email, pairNr);
      console.log(`TOKEN: ${token} USER: ${user}`);
      // TODO: Change mock to proper values
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
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
      {isLoginButtonPressed ? (
        <Spinner color="red" />
      ) : (
        <View style={styles.container}>
          <View style={styles.stack}>
            <Image style={styles.logo} source={ksStyle.logo.source} />
            <LoginForm onClick={loginPressed} />
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
