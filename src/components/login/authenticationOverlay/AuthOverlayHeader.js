import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: ksStyle.colors.primaryColorMedium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    color: 'white',
    fontSize: 24,
  },
});

function AuthOverlayHeader({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>{title}</Text>
    </View>
  );
}

export default AuthOverlayHeader;

AuthOverlayHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
