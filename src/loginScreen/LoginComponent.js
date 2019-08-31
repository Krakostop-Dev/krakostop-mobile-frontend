import React from 'react';
import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function () {

  const _loginPressed = () => {
    alert('Proceed to Login')
  }

  return (

    <View style={styles.colsContainer}>
      <View style={styles.sideColumn}/>
      <View style={styles.middleColumn}>
        <Image style={styles.logo}
               source={require('../../assets/krakologo2019.png')}/>

        <View style={styles.loginBtnContainer}>
          <TouchableWithoutFeedback onPress={_loginPressed}>
            <Image style={styles.loginButton}
                   source={require('../../assets/btn_google_signin_light_normal_web.png')}/>
          </TouchableWithoutFeedback>
        </View>

      </View>
      <View style={styles.sideColumn}/>
    </View>

  )

}

const styles = StyleSheet.create({
  colsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#8FC6B1"

  },
  middleColumn: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center"
  },
  sideColumn: {
    flex: 1,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null
  },
  loginBtnContainer: {
    flex: 1,
  },
  loginButton: {
    flex: 0.2,
    resizeMode: 'contain',
    width: null,
    height: null,
  }
});
