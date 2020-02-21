import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },
  timer_image: {
    width: 80,
    height: 80,
    margin: 5,
  },
  timer_counter: {
    width: '90%',
    padding: 10,
    backgroundColor: ksStyle.colors.secondaryColorMedium,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  timer_counter_text: {
    color: 'white',
    fontSize: 18,
  },
});
const TIMER = require('../../../../assets/timer.png');

function AuthTimer() {
  return (
    <View style={styles.container}>
      <Image source={TIMER} style={styles.timer_image} />
      <View style={styles.timer_counter}>
        <Text style={styles.timer_counter_text}>50 s</Text>
      </View>
    </View>
  );
}

export default AuthTimer;
