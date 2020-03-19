import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import RankingTopPlacePairNoView from './RankingTopPlacePairNoView';
import RankingTopPlaceUsersView from './RankingTopPlaceUsersView';
import RankingTopPlaceKmLeftView from './RankingTopPlaceKmLeftView';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6EA2FE',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
  },
});

function RankingTopPlaceContentView({ participant }) {
  return (
    <View style={styles.container}>
      <RankingTopPlacePairNoView pairNo={participant.pair.pair_nr} />
      <RankingTopPlaceUsersView users={participant.pair.users} />
      <RankingTopPlaceKmLeftView />
    </View>
  );
}

export default RankingTopPlaceContentView;

RankingTopPlaceContentView.propTypes = {
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
};
