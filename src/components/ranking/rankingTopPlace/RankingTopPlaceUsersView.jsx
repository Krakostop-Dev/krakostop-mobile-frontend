import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: { paddingVertical: 2, alignItems: 'center' },
  text: { fontSize: 13, color: 'white', textAlign: 'center' },
});

function RankingTopPlaceUsersView({ users }) {
  return (
    <View style={styles.container}>
      {users[0] && (
        <Text style={styles.text}>
          {`${users[0].first_name} ${users[0].last_name}`}
        </Text>
      )}
      {users[1] && (
        <Text style={styles.text}>
          {`${users[1].first_name} ${users[1].last_name}`}
        </Text>
      )}
    </View>
  );
}

export default RankingTopPlaceUsersView;

RankingTopPlaceUsersView.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
