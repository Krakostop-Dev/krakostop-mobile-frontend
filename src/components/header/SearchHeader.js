import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import KsSearchBar from '../searchBar/KsSearchBar';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    height: 50,
    width: '100%',
    borderRadius: 3,
    backgroundColor: 'transparent',
  },
});

function SearchHeader() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.content}>
          <KsSearchBar />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default SearchHeader;
