import { StyleSheet } from 'react-native';

const LOGO = require('../../../assets/krk_logo.png');

export const ksStyle = {
  colors: {
    primaryColorLight: '#FFF3E0',
    primaryColorMedium: '#FED290',
    primaryColorDark: '#FFCC80',
  },
  icon: {
    size: 25,
  },
  logo: {
    source: LOGO,
    style_small: {
      width: 70,
      height: 30,
    },
    style_medium: {
      width: 200,
      height: 100,
    },
  },
  drawerIcon: {
    width: 35,
    height: 35,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export const ksBasic = StyleSheet.create({
  stackContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ksStyle.colors.primaryColorLight,
  },
  stack: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mediumText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10,
  },
});
