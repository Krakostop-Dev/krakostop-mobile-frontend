import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import searchData from '../../../data/searchData';
import SearchResultView from './SearchResultView';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
});

function SearchResultList() {
  return (
    <FlatList
      style={styles.container}
      data={searchData}
      renderItem={({ item, index }) => {
        console.log(index);
        return <SearchResultView result={item} id={index} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default SearchResultList;
