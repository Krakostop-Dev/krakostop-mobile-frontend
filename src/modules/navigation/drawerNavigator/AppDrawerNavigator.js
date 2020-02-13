import React from 'react';
import CustomDrawerContentComponent from '../../../components/navigation/CustomDrawerContentComponent';
import drawerRouteConfig from "./drawerRouteConfig";
import {createDrawerNavigator} from "react-navigation-drawer";

export default createDrawerNavigator(
    drawerRouteConfig ,
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
