import React from 'react';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

const MainHeader = ({ navigation }) => {
  return (
    <Header
      placement="left"
      leftComponent={<HeaderLeft navigation={navigation} />}
      centerComponent={HeaderCenter}
      rightComponent={HeaderRight}
      containerStyle={{
        backgroundColor: ksStyle.colors.primaryColorMedium,
      }}
    />
  );
};
export default MainHeader;
MainHeader.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
