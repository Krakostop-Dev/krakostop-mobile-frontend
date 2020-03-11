import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  redirectToPhoneApp,
  formatPhoneNumber,
} from '../../modules/PhoneManager';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 5 },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'sans-serif',
    fontSize: 15,
    flexShrink: 1,
  },
});

function ParticipantPhoneNoView({ phone, isPhoneEnabled }) {
  const formattedPhone = formatPhoneNumber(phone);

  async function onPress() {
    if (isPhoneEnabled) redirectToPhoneApp(phone);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text} numberOfLines={4}>
        tel. {isPhoneEnabled ? formattedPhone : ''}
      </Text>
    </TouchableOpacity>
  );
}

export default ParticipantPhoneNoView;

ParticipantPhoneNoView.propTypes = {
  phone: PropTypes.string.isRequired,
  isPhoneEnabled: PropTypes.bool.isRequired,
};
