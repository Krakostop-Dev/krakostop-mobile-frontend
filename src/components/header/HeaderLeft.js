import React from 'react';

import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { ksStyle } from '../../styles/basic/ksBasic';

const IconComponent = MaterialIcons;

export default ({ navigation }) => {
  return (
    <Button
      onPress={() => navigation.openDrawer()}
      icon={<IconComponent name={'menu'} size={ksStyle.icon.size} />}
      type="clear"
    />
  );
};
