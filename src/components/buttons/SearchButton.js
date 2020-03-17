import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ksStyle } from '../../styles/basic/ksBasic';
import { SearchContext } from '../../modules/context/SearchContext';

const IconComponent = MaterialIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default () => {
  const { isSearchActive, setSearchActive } = useContext(SearchContext);

  function onPress() {
    if (isSearchActive) {
      setSearchActive(false);
    } else {
      setSearchActive(true);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <IconComponent
        name="search"
        size={ksStyle.icon.size}
        color={
          isSearchActive
            ? ksStyle.colors.activeIconColor
            : ksStyle.colors.inactiveIconColor
        }
      />
    </TouchableOpacity>
  );
};
