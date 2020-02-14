import {Container} from 'native-base';
import {ksStyle} from '../../styles/basic/ksBasic';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import DrawerNavigatorHeader from './DrawerNavigatorHeader';
import {DrawerItems} from 'react-navigation-drawer';

export default props => {
  return (
    <Container>
      <DrawerNavigatorHeader style={styles.header}/>
      <View style={styles.list}>
        <ScrollView>
          <SafeAreaView>
            <DrawerItems {...props} />
          </SafeAreaView>
        </ScrollView>
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
