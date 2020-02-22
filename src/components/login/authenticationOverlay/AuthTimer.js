import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    margin: 5,
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

function AuthTimer({
  codeValidityTime,
  setTimeExpired,
  setTimerRestarted,
  isTimerRestarted,
}) {
  const [time, decreaseTime] = useState(codeValidityTime);

  useEffect(() => {
    const interval = setInterval(
      () =>
        decreaseTime(seconds => {
          if (isTimerRestarted) {
            setTimerRestarted(false);
            setTimeExpired(false);
            return codeValidityTime;
          }
          if (seconds !== 0) {
            return seconds - 1;
          }
          setTimeExpired(true);
          return 0;
        }),
      1000
    );
    return () => clearInterval(interval);
  }, [isTimerRestarted]);

  return (
    <View style={styles.container}>
      <Image source={TIMER} style={styles.timer_image} />
      <View style={styles.timer_counter}>
        <Text style={styles.timer_counter_text}>{time} s</Text>
      </View>
    </View>
  );
}

export default AuthTimer;

AuthTimer.propTypes = {
  codeValidityTime: PropTypes.number.isRequired,
  setTimeExpired: PropTypes.func.isRequired,
  isTimerRestarted: PropTypes.bool.isRequired,
  setTimerRestarted: PropTypes.func.isRequired,
};
