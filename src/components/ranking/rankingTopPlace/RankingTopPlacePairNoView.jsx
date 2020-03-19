import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: { fontSize: 18, color: 'white', fontWeight: 'bold' },
});

function RankingTopPlacePairNoView({ pairNo }) {
  return (
    <View>
      <Text style={styles.text}>Para #{pairNo}</Text>
    </View>
  );
}

export default RankingTopPlacePairNoView;

RankingTopPlacePairNoView.propTypes = {
  pairNo: PropTypes.number.isRequired,
};
