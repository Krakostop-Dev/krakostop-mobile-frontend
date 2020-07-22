import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ksStyle } from '../../styles/basic/ksBasic';
import SearchButton from '../buttons/SearchButton';
import { SearchContext } from '../../modules/context/SearchContext';

const styles = StyleSheet.create({
  containerStyle: {
    padding: 0,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    paddingBottom: 0,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorMedium,
  },
  input: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
  },
});

function KsSearchBar() {
  const { searchPattern, searchByPattern } = useContext(SearchContext);
  const [search, setSearch] = useState(searchPattern);

  function onChangeSearch(pattern) {
    setSearch(pattern);
    searchByPattern(pattern);
  }

  return (
    <SearchBar
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      placeholder="Imię, nazwisko lub nr pary"
      placeholderTextColor="rgba(0, 0, 0, 0.2)"
      clearIcon={{
        color: ksStyle.colors.inactiveIconColor,
        size: ksStyle.icon.size,
      }}
      inputStyle={styles.input}
      value={search}
      onChangeText={pattern => onChangeSearch(pattern)}
      searchIcon={<SearchButton />}
    />
  );
}

export default KsSearchBar;
