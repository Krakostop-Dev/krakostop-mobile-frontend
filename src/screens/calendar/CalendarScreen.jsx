import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MainHeader from '../../components/header/MainHeader';
import CalendarView from '../../components/calendar/CalendarView';
import { ksStyle } from '../../styles/basic/ksBasic';
import CustomizedSearchBarOverlay from '../../components/searchBar';
import SafeArea from '../../styles/SafeArea';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: ksStyle.colors.primaryColorLight,
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function CalendarScreen({ navigation }) {
  return (
    <SafeArea>
      <MainHeader navigation={navigation} />
      <CustomizedSearchBarOverlay />

      <View style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <CalendarView />
          </View>
        </ScrollView>
      </View>
    </SafeArea>
  );
}

export default CalendarScreen;

CalendarScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
