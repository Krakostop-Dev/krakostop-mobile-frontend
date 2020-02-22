import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorMedium,
    borderRadius: 3,
    alignItems: 'center',
    width: '90%',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 7,
  },
  text: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  place: { width: '16%' },
  people: { width: '42%' },
  pairNo: { width: '16%' },
  kmLeft: { width: '26%' },
});

function RankingItemView({ participant, index }) {
  return (
    <View style={styles.container}>
      <View style={styles.place}>
        <Text style={[styles.text, styles.textCenter]}>{index + 1}</Text>
      </View>
      <View style={styles.people}>
        <Text
          style={styles.text}
        >{`${participant.pair.users[0].first_name} ${participant.pair.users[0].last_name}`}</Text>
        <Text
          style={styles.text}
        >{`${participant.pair.users[1].first_name} ${participant.pair.users[1].last_name}`}</Text>
      </View>
      <View style={styles.pairNo}>
        <Text style={styles.text}>#{participant.pair.pair_nr}</Text>
      </View>
      <View style={styles.kmLeft}>
        <Text style={styles.text}>1213km</Text>
      </View>
    </View>
  );
}

export default RankingItemView;

RankingItemView.propTypes = {
  participant: PropTypes.shape({
    pair: PropTypes.shape({
      pair_nr: PropTypes.number.isRequired,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
