import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import DefaultHeader from './defaultHeader';
import { SearchContext } from '../../modules/context/SearchContext';
import SearchHeader from './searchHeader/SearchHeader';
import AvatarButton from './AvatarButton';
import SearchButton from './SearchButton';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: ksStyle.colors.primaryColorDark,
  },
});

const MainHeader = () => {
  const { isSearchActive } = useContext(SearchContext);
  const leftComponent = AvatarButton;
  const searchButton = SearchButton;

  if (isSearchActive) {
    return (
      <SearchHeader
        leftComponent={leftComponent}
        searchButton={searchButton}
        containerStyle={styles.containerStyle}
      />
    );
  }
  return (
    <DefaultHeader
      leftComponent={leftComponent}
      searchButton={searchButton}
      containerStyle={styles.containerStyle}
    />
  );
};
export default MainHeader;
