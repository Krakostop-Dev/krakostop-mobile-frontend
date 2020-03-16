import React from 'react';
import { Image } from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';

export default () => {
  return (
    <Image source={ksStyle.logo.source} style={ksStyle.logo.style_small} />
  );
};
