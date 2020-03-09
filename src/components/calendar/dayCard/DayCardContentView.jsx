import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 23, fontWeight: 'bold' },
});

function DayCardContentView({ date }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
}

export default DayCardContentView;

DayCardContentView.propTypes = {
  date: PropTypes.string.isRequired,
};
