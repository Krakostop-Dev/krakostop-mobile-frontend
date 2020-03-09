import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AttractionView from './attraction/AttractionView';

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center', paddingTop: 10 },
});

function DayDetailsContentView({ day }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {day.attractions.map(attraction => (
          <AttractionView key={attraction.id} attraction={attraction} />
        ))}
      </View>
    </ScrollView>
  );
}

export default DayDetailsContentView;

DayDetailsContentView.propTypes = {
  day: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attractions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
