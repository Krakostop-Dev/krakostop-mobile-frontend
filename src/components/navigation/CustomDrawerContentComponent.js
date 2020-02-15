import { Container } from 'native-base';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import DrawerNavigatorHeader from './DrawerNavigatorHeader';
import { ksStyle } from '../../styles/basic/ksBasic';

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

export default props => {
  return (
    <Container>
      <DrawerNavigatorHeader {...props} style={styles.header} />
      <View style={styles.list}>
        <ScrollView>
          <SafeAreaView>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <DrawerItems {...props} />
          </SafeAreaView>
        </ScrollView>
      </View>
    </Container>
  );
};
