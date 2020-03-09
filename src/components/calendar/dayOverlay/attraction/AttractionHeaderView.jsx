import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ksStyle } from '../../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ksStyle.colors.primaryColorDark,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
  },
  text: { color: 'white', fontWeight: 'bold' },
});

function AttractionHeaderView({ name, time }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Text style={styles.text}>{time}</Text>
      </View>
    </View>
  );
}

export default AttractionHeaderView;

AttractionHeaderView.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
