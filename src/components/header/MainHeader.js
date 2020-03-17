import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import AvatarButton from './AvatarButton';
import SearchButton from '../buttons/SearchButton';
import { ksStyle } from '../../styles/basic/ksBasic';
import KsLogoView from './KsLogoView';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: ksStyle.colors.primaryColorDark,
  },
});

const MainHeader = () => {
  return (
    <Header
      leftComponent={AvatarButton}
      centerComponent={KsLogoView}
      rightComponent={SearchButton}
      containerStyle={styles.containerStyle}
    />
  );
};
export default MainHeader;
