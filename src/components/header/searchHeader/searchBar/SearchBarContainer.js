import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
import { ksStyle } from '../../../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerStyle: {
    paddingVertical: 0,
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorMedium,
    borderRadius: 3,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
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

function SearchBarContainer({ searchButton }) {
  const [search, setSearch] = useState();

  function onChangeSearch(text) {
    setSearch(text);
  }

  return (
    <View style={styles.container}>
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
        searchIcon={searchButton()}
      />
    </View>
  );
}

export default SearchBarContainer;

SearchBarContainer.propTypes = {
  searchButton: PropTypes.func.isRequired,
};
