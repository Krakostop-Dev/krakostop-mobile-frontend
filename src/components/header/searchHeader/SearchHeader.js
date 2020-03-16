import React from 'react';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import SearchBarContainer from './searchBar';

const SearchHeader = ({ leftComponent, containerStyle, searchButton }) => {
  return (
    <Header
      leftComponent={leftComponent}
      centerContainerStyle={{ flex: 0 }}
      rightComponent={<SearchBarContainer searchButton={searchButton} />}
      rightContainerStyle={{ flex: 5 }}
      containerStyle={containerStyle}
    />
  );
};
export default SearchHeader;

SearchHeader.defaultProps = {
  leftComponent: null,
  containerStyle: {},
};

SearchHeader.propTypes = {
  leftComponent: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  searchButton: PropTypes.func.isRequired,
};
