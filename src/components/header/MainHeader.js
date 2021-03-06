import React from 'react';
import { Header } from 'react-native-elements';
import { ksStyle } from '../../styles/basic/ksBasic';
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

const MainHeader = () => {
  return (
    <Header
      leftComponent={HeaderLeft}
      centerComponent={HeaderCenter}
      rightComponent={HeaderRight}
      containerStyle={{
        backgroundColor: ksStyle.colors.primaryColorDark,
      }}
    />
  );
};
export default MainHeader;
