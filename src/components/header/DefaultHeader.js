import React from 'react';
import { StyleSheet, View } from 'react-native';
import AvatarButton from './AvatarButton';
import SearchButton from '../buttons/SearchButton';
import KsLogoView from './KsLogoView';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
  },
  logo: {
    flex: 5,
  },
  searchButton: {
    flex: 1,
  },
});

const DefaultHeader = () => {
  return (
    <View style={styles.container}>
      <AvatarButton style={styles.avatar} />
      <KsLogoView style={styles.logo} />
      <SearchButton style={styles.searchButton} />
    </View>
  );
};
export default DefaultHeader;
