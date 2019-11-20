import { StyleSheet } from 'react-native';

export const ksStyle = {
  colors: {
    primaryColorLight: '#FFCC80',
    primaryColorMedium: '#FFA726',
  },
  icon: {
    size: 25
  },
  logo: {
    source: require('../../../assets/krk_logo.png'),
    style:{
      width: 70,
      height: 30
    }
  }
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
