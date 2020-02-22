import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'sans-serif',
    flexShrink: 1,
  },
});

function ParticipantPhoneNoView({ phone }) {
  const formattedPhone = [
    phone.slice(0, 3),
    ' ',
    phone.slice(3, 6),
    ' ',
    phone.slice(6),
  ].join('');

  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={4}>
        tel. {formattedPhone}
      </Text>
    </View>
  );
}

export default ParticipantPhoneNoView;

ParticipantPhoneNoView.propTypes = {
  phone: PropTypes.string.isRequired,
};
