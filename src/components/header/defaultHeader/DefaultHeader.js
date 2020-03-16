import React from 'react';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import KsLogoView from './KsLogoView';

const DefaultHeader = ({ leftComponent, containerStyle, searchButton }) => {
  return (
    <Header
      leftComponent={leftComponent}
      centerComponent={KsLogoView}
      rightComponent={searchButton}
      containerStyle={containerStyle}
    />
  );
};
export default DefaultHeader;

DefaultHeader.defaultProps = {
  containerStyle: {},
};

DefaultHeader.propTypes = {
  leftComponent: PropTypes.func.isRequired,
  containerStyle: ViewPropTypes.style,
  searchButton: PropTypes.func.isRequired,
};
