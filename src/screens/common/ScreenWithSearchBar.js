import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PropTypes from 'prop-types';
import MainHeader from '../../components/header/MainHeader';
import SafeArea from './SafeArea';
import SearchResultList from '../../components/searchBar/searchResultList';
import { SearchContext } from '../../modules/context/SearchContext';
import { HEADER_HEIGHT } from '../../../config/Constants';

const styles = StyleSheet.create({
  searchResults: {
    top: HEADER_HEIGHT + getStatusBarHeight(),
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
  },
  header: {
    zIndex: 0,
  },
});

const ScreenWithSearchBar = ({ children }) => {
  const { isSearchActive } = useContext(SearchContext);
  return (
    <SafeArea>
      <MainHeader style={styles.header} />
      {isSearchActive && <SearchResultList style={styles.searchResults} />}
      {children}
    </SafeArea>
  );
};

export default ScreenWithSearchBar;

ScreenWithSearchBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
