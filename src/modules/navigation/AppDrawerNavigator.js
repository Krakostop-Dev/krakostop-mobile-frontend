import React from 'react';
import DrawerNavigator from 'react-navigation-drawer/src/navigators/createDrawerNavigator';
import CustomDrawerContentComponent from '../../components/navigation/CustomDrawerContentComponent';
import WhatToTakeView from '../../views/drawerNavigatorScreens/WhatToTakeView';
import PartnersView from '../../views/drawerNavigatorScreens/PartnersView';
import StartPackageView from '../../views/drawerNavigatorScreens/StartPackageView';
import ContactView from '../../views/drawerNavigatorScreens/ContactView';
import AboutAppView from '../../views/drawerNavigatorScreens/AboutAppView';
import LogoutView from '../../views/drawerNavigatorScreens/LogoutView';
import DashboardScreen from '../../views/dashboardScreen/DashboardScreen';
import { Image } from 'react-native';
import { ksStyle } from '../../styles/basic/ksBasic';
import { DrawerItem } from '@react-navigation/drawer';
import ProfileView from '../../views/profileScreen/ProfileView';

export default new DrawerNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    Profile: {
      screen: ProfileView,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    WhatToTake: {
      screen: WhatToTakeView,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../../../assets/icons/backpack.png')}
            style={ksStyle.drawerIcon}
          />
        ),
        drawerLabel: 'Co zabrać?',
      },
    },
    Partners: {
      screen: PartnersView,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../../../assets/icons/partners.png')}
            style={ksStyle.drawerIcon}
          />
        ),
        drawerLabel: 'Partnerzy',
      },
    },
    Package: {
      screen: StartPackageView,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../../../assets/icons/bag.png')}
            style={ksStyle.drawerIcon}
          />
        ),
        drawerLabel: 'Pakiet startowy',
      },
    },
    Contact: {
      screen: ContactView,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../../../assets/icons/contact.png')}
            style={ksStyle.drawerIcon}
          />
        ),
        drawerLabel: 'Kontakt',
      },
    },
    AboutApp: {
      screen: AboutAppView,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../../../assets/icons/info.png')}
            style={ksStyle.drawerIcon}
          />
        ),
        drawerLabel: 'O aplikacji',
      },
    },
    Logout: {
      screen: LogoutView,
      navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../../../assets/icons/logout.png')}
            style={ksStyle.drawerIcon}
          />
        ),
        drawerLabel: () => (
          <DrawerItem
            labelStyle={{ color: 'rgba(253, 0, 0, 0.65)' }}
            label={'Wyloguj'}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Profile',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: 'transparent',
  }
);
