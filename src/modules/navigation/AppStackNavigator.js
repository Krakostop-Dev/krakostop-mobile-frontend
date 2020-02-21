import { createStackNavigator } from 'react-navigation-stack';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import ProfileView from '../../views/profileScreen/ProfileView';
import WhatToTakeView from '../../views/drawerNavigatorScreens/WhatToTakeView';
import PartnersView from '../../views/drawerNavigatorScreens/PartnersView';
import StartPackageView from '../../views/drawerNavigatorScreens/StartPackageView';
import ContactView from '../../views/drawerNavigatorScreens/ContactView';
import AboutAppView from '../../views/drawerNavigatorScreens/AboutAppView';
import LogoutView from '../../views/drawerNavigatorScreens/LogoutView';
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
