import React from 'react';
import { Image } from 'react-native';
import { ksStyle } from '../../../styles/basic/ksBasic';
import Images from '../../../../assets/Images';

export default () => {
  return (
    <Image source={Images.others.krk_logo} style={ksStyle.logo.style_small} />
  );
};
