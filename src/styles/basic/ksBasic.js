import { StyleSheet } from 'react-native';

export const ksStyle = {
  colors: {
    primaryColorLight: '#FFF3E0',
    primaryColorMediumLight: '#FFE0B2',
    primaryColorMedium: '#FFC062',
    primaryColorDark: '#FFA726',
    secondaryColorMedium: '#6EA2FE',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    inactiveIconColor: 'rgba(255, 255, 255, 0.5)',
    activeIconColor: 'white',
  },
  icon: {
    size: 30,
  },
  logo: {
    style_small: {
      width: 110,
      height: 50,
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
  input: {
    padding: 10,
    fontSize: 16,
    marginBottom: 5,
    borderRadius: 10,
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
