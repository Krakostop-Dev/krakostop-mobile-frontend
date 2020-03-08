import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: ksStyle.colors.primaryColorDark,
    padding: 2,
    alignItems: 'center',
  },
  text: { color: 'white' },
});

function DayCardHeaderView({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default DayCardHeaderView;

DayCardHeaderView.propTypes = {
  name: PropTypes.string.isRequired,
};
