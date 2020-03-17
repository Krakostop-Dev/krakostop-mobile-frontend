import React, { useContext, useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ksStyle } from '../../styles/basic/ksBasic';
import SearchResultList from './searchResultList';
import { SearchContext } from '../../modules/context/SearchContext';
import SearchButton from '../buttons/SearchButton';

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorDark,
    borderRadius: 3,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    backgroundColor: ksStyle.colors.primaryColorMedium,
  },
  input: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
  },
  searchResults: {
    backgroundColor: ksStyle.colors.primaryColorMedium,
  },
});
function CustomizedSearchBarOverlay() {
  const { isSearchActive, setSearchActive } = useContext(SearchContext);
  const [search, setSearch] = useState();

  function onChangeSearch(text) {
    setSearch(text);
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isSearchActive}
      onRequestClose={() => setSearchActive(false)}
    >
      <TouchableOpacity
        onPress={() => setSearchActive(false)}
        activeOpacity={1}
        style={{ width: '100%', height: '100%' }}
      >
        <TouchableWithoutFeedback>
          <View style={{ alignItems: 'center' }}>
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
            <SearchResultList />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

export default CustomizedSearchBarOverlay;
