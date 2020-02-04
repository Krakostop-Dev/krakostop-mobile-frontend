import React from 'react';
import { Button, Image } from 'react-native-elements';
import { ksStyle } from '../../styles/basic/ksBasic';

export default () => {
  return (
    <Button
      type="clear"
      icon={
        <Image source={ksStyle.logo.source} style={ksStyle.logo.style_small} />
      }
    />
  );
};
