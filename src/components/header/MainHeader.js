import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';
import { SearchContext } from '../../modules/context/SearchContext';
import SearchHeader from '../searchBar';
import DefaultHeader from './DefaultHeader';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: ksStyle.colors.primaryColorDark,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

const MainHeader = () => {
  const { isSearchActive } = useContext(SearchContext);

  return (
    <View style={styles.containerStyle}>
      {isSearchActive ? <SearchHeader /> : <DefaultHeader />}
    </View>
  );
};
export default MainHeader;
