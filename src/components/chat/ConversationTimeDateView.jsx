import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  time: { paddingVertical: 5 },
  date: { paddingVertical: 5 },
});

function ConversationTimeDateView({ time, date }) {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text>{time}</Text>
      </View>
      <View style={styles.date}>
        <Text>{date}</Text>
      </View>
    </View>
  );
}

export default ConversationTimeDateView;

ConversationTimeDateView.propTypes = {
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
