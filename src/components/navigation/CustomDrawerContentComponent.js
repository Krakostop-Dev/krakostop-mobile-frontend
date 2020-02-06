import { Container } from 'native-base';
import { ksStyle } from '../../styles/basic/ksBasic';
import { StyleSheet, View } from 'react-native';
import React  from 'react';
import DrawerNavigatorList from './DrawerNavigatorList';
import DrawerNavigatorHeader from './DrawerNavigatorHeader';

export default () => {
  return (
    <Container>
      <DrawerNavigatorHeader style={styles.header} />
      <View style={styles.list}>
        <DrawerNavigatorList />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: ksStyle.colors.primaryColorDark,
  },
  list: {
    flex: 6,
    backgroundColor: ksStyle.colors.primaryColorLight,
  },
});
