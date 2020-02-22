import { createStackNavigator } from 'react-navigation-stack';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import ProfileView from '../../screens/profile/ProfileView';
import WhatToTakeView from '../../screens/drawerNavigator/WhatToTakeView';
import PartnersView from '../../screens/drawerNavigator/PartnersView';
import StartPackageView from '../../screens/drawerNavigator/StartPackageView';
import ContactView from '../../screens/drawerNavigator/ContactView';
import AboutAppView from '../../screens/drawerNavigator/AboutAppView';
import LogoutView from '../../screens/drawerNavigator/LogoutView';
import { ksStyle } from '../../styles/basic/ksBasic';

const AppStackNavigator = createStackNavigator(
  {
    AppBottomTabNavigator,
    Profile: {
      screen: ProfileView,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    WhatToTake: {
      screen: WhatToTakeView,
    },
    Partners: {
      screen: PartnersView,
    },
    Package: {
      screen: StartPackageView,
    },
    Contact: {
      screen: ContactView,
    },
    AboutApp: {
      screen: AboutAppView,
    },
    Logout: {
      screen: LogoutView,
    },
  },
  {
    initialRouteName: 'AppBottomTabNavigator',
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: { backgroundColor: ksStyle.colors.backgroundColor, opacity: 1 },
  }
);

export default AppStackNavigator;
