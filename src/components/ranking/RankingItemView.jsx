import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorMedium,
    borderRadius: 3,
    alignItems: 'center',
    width: '90%',
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 7,
  },
  text: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  place: { width: '16%' },
  people: { width: '42%' },
  pairNo: { width: '16%' },
  kmLeft: { width: '26%' },
});

function RankingItemView() {
  return (
    <View style={styles.container}>
      <View style={styles.place}>
        <Text style={[styles.text, styles.textCenter]}>40</Text>
      </View>
      <View style={styles.people}>
        <Text style={styles.text}>Jan Kowalski</Text>
        <Text style={styles.text}>Anna Kowalska</Text>
      </View>
      <View style={styles.pairNo}>
        <Text style={styles.text}>#112</Text>
      </View>
      <View style={styles.kmLeft}>
        <Text style={styles.text}>1213km</Text>
      </View>
    </View>
  );
}

export default RankingItemView;
