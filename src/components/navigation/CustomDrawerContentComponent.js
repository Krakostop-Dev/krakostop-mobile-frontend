import { Container } from 'native-base';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import PropTypes from 'prop-types';
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

function CustomDrawerContentComponent(props) {
  const { navigation } = props;
  return (
    <Container>
      <DrawerNavigatorHeader navigation={navigation} style={styles.header} />
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
}

export default CustomDrawerContentComponent;

CustomDrawerContentComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
