import React from 'react';
import { View } from 'react-native';
import calendarData from '../../data/calendar/calendarData';
import DayCardView from './DayCardView';

function CalendarView() {
  return (
    <View>
      {calendarData.map(day => (
        <DayCardView key={day.id} day={day} />
      ))}
    </View>
  );
}

export default CalendarView;
