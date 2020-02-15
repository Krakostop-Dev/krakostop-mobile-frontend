import React, { useContext } from 'react';

import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContext } from 'react-navigation';
import { ksStyle } from '../../styles/basic/ksBasic';

const IconComponent = MaterialIcons;

export default () => {
  const navigation = useContext(NavigationContext);

  return (
    <Button
      onPress={() => navigation.openDrawer()}
      icon={<IconComponent name="menu" size={ksStyle.icon.size} />}
      type="clear"
    />
  );
};
