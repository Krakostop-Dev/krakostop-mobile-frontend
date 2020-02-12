import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: '200',
  },
});

function PairTitleView() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={10} style={styles.text}>
        Para 121, miejsce #12
      </Text>
    </View>
  );
}

export default PairTitleView;
