import React, { useContext } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import SearchResultView from './SearchResultView';
import { SearchContext } from '../../../modules/context/SearchContext';

const styles = StyleSheet.create({
  searchInterrupter: {
    height: '100%',
  },
  searchList: {
    height: '20%',
  },
});

function SearchResultList({ style }) {
  const { searchResult, setSearchActive } = useContext(SearchContext);

  function onPress() {
    setSearchActive(false);
  }
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.searchInterrupter}
        onPress={() => onPress()}
      >
        <FlatList
          style={styles.searchList}
          data={searchResult}
          renderItem={({ item, index }) => {
            return <SearchResultView result={item} id={index} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchResultList;

SearchResultList.propTypes = {
  style: ViewPropTypes.style.isRequired,
};
