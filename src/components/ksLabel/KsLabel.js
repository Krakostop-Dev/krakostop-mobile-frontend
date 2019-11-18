import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const KsLabel = ({ labelText }) => {
  return (
    <View style={elements.textContainer}>
      <Text style={elements.mainText}>{labelText}</Text>
    </View>
  );
};

export default KsLabel;

const elements = StyleSheet.create({
  mainText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
