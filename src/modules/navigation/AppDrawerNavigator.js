import React from 'react';
import AppBottomNavigator from './AppBottomNavigator';

import DrawerNavigator from 'react-navigation-drawer/src/navigators/createDrawerNavigator';
import CustomDrawerContentComponent from '../../components/navigation/CustomDrawerContentComponent';

export default new DrawerNavigator(
  {
    Bottom: AppBottomNavigator,
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
