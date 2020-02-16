import React from 'react';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { ksStyle } from '../../styles/basic/ksBasic';

const IconComponent = MaterialIcons;

const HeaderLeft = ({ navigation }) => {
  return (
    <Button
      onPress={() => navigation.openDrawer()}
      icon={<IconComponent name="menu" size={ksStyle.icon.size} />}
      type="clear"
    />
  );
};

export default HeaderLeft;

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
