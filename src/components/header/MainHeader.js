import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import AvatarButton from './AvatarButton';
import SearchButton from '../buttons/SearchButton';
import { ksStyle } from '../../styles/basic/ksBasic';
import KsLogoView from './KsLogoView';
import { SearchContext } from '../../modules/context/SearchContext';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: ksStyle.colors.primaryColorDark,
  },
});

const MainHeader = () => {
  const { isSearchActive } = useContext(SearchContext);
  return (
    <Header
      leftComponent={AvatarButton}
      centerComponent={!isSearchActive && KsLogoView}
      rightComponent={SearchButton}
      containerStyle={styles.containerStyle}
    />
  );
};
export default MainHeader;
