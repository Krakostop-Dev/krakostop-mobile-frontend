import React from 'react';
import { View, StyleSheet } from 'react-native';
import calendarData from '../../data/calendar/calendarData';
import DayCardView from './dayCard/DayCardView';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', width: '100%' },
});

function CalendarView() {
  return (
    <View style={styles.container}>
      {calendarData.map(day => (
        <DayCardView key={day.id} day={day} />
      ))}
    </View>
  );
}

export default CalendarView;
