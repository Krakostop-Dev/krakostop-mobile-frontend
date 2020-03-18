import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {},
  name: { fontWeight: 'bold', fontSize: 16 },
  pair_data_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  pair_data_label: {
    fontSize: 12,
  },
});

function SearchResultUserInfo({ name, leftBottomText, rightBottomText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.pair_data_view}>
        <Text style={styles.pair_data_label}>{leftBottomText}</Text>
        <Text style={styles.pair_data_label}>{rightBottomText}</Text>
      </View>
    </View>
  );
}

export default SearchResultUserInfo;

SearchResultUserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  leftBottomText: PropTypes.string.isRequired,
  rightBottomText: PropTypes.string.isRequired,
};
