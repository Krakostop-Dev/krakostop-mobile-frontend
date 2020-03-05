import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainHeader from '../../components/header/MainHeader';
import CalendarView from '../../components/calendar/CalendarView';

const BACKGROUND = require('../../../assets/ranking-background.png');

const styles = StyleSheet.create({
  background: { width: '100%', height: '100%' },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function CalendarScreen({ navigation }) {
  return (
    <View>
      <MainHeader navigation={navigation} />

      <ImageBackground source={BACKGROUND} style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <CalendarView />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default CalendarScreen;

CalendarScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
