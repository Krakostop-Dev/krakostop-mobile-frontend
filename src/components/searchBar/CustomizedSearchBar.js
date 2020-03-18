import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ksStyle } from '../../styles/basic/ksBasic';
import SearchButton from '../buttons/SearchButton';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 3,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomWidth: 0,
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

function CustomizedSearchBar() {
  const [search, setSearch] = useState();

  function onChangeSearch(text) {
    setSearch(text);
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
      onChangeText={text => onChangeSearch(text)}
      searchIcon={<SearchButton />}
    />
  );
}

export default CustomizedSearchBar;
