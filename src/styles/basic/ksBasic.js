import { StyleSheet, Platform } from 'react-native';

export const ksStyle = {
  colors: {
    primaryColorLight: '#FFF3E0',
    primaryColorMedium: '#FED290',
    primaryColorDark: '#FFA726',
    secondaryColorMedium: '#6EA2FE',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
  font: {
    base: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    bold: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'sans-serif-condensed',
    emphasis: Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'sans-serif',
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
