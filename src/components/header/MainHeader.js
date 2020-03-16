import React from 'react';
import { Header } from 'react-native-elements';
import { ksStyle } from '../../styles/basic/ksBasic';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import CustomSearchBar from './searchBar';

const MainHeader = () => {
  return (
    <Header
      leftComponent={HeaderLeft}
      rightComponent={HeaderRight}
      containerStyle={{
        backgroundColor: ksStyle.colors.primaryColorDark,
      }}
    />
  );
};
export default MainHeader;
