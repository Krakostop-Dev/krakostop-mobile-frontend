import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SearchResultView from './SearchResultView';
import { SearchContext } from '../../../modules/context/SearchContext';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

function SearchResultList() {
  const { searchResult } = useContext(SearchContext);

  return (
    <FlatList
      style={styles.container}
      data={searchResult}
      renderItem={({ item, index }) => {
        return <SearchResultView result={item} id={index} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default SearchResultList;
