import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 17,
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
});

function ParticipantNameView({ user }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={10} style={styles.text}>
        {`${user.first_name}${user.last_name}`}
      </Text>
    </View>
  );
}

export default ParticipantNameView;

ParticipantNameView.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired,
};
