import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { ksStyle } from '../../styles/basic/ksBasic';
import CustomSearchBar from './searchBar';

const IconComponent = MaterialIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <CustomSearchBar />
      <Button
        icon={
          <IconComponent
            name="search"
            size={ksStyle.icon.size}
            color="rgba(255, 255, 255, 0.5)"
          />
        }
        type="clear"
      />
    </View>
  );
};
