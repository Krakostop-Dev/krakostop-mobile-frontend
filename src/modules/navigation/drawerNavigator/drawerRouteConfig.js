import { Image } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import DashboardScreen from '../../../views/dashboardScreen/DashboardScreen';
import WhatToTakeView from '../../../views/drawerNavigatorScreens/WhatToTakeView';
import { ksStyle } from '../../../styles/basic/ksBasic';
import PartnersView from '../../../views/drawerNavigatorScreens/PartnersView';
import StartPackageView from '../../../views/drawerNavigatorScreens/StartPackageView';
import ContactView from '../../../views/drawerNavigatorScreens/ContactView';
import AboutAppView from '../../../views/drawerNavigatorScreens/AboutAppView';
import LogoutView from '../../../views/drawerNavigatorScreens/LogoutView';

const BACKPACK = require('../../../../assets/icons/backpack.png');
const PARTNERS = require('../../../../assets/icons/partners.png');
const BAG = require('../../../../assets/icons/bag.png');
const CONTACT = require('../../../../assets/icons/contact.png');
const INFO = require('../../../../assets/icons/info.png');
const LAYOUT = require('../../../../assets/icons/logout.png');

export default {
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
  WhatToTake: {
    screen: WhatToTakeView,
    navigationOptions: {
      drawerIcon: <Image source={BACKPACK} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Co zabrać?',
    },
  },
  Partners: {
    screen: PartnersView,
    navigationOptions: {
      drawerIcon: <Image source={PARTNERS} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Partnerzy',
    },
  },
  Package: {
    screen: StartPackageView,
    navigationOptions: {
      drawerIcon: <Image source={BAG} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Pakiet startowy',
    },
  },
  Contact: {
    screen: ContactView,
    navigationOptions: {
      drawerIcon: <Image source={CONTACT} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Kontakt',
    },
  },
  AboutApp: {
    screen: AboutAppView,
    navigationOptions: {
      drawerIcon: <Image source={INFO} style={ksStyle.drawerIcon} />,
      drawerLabel: 'O aplikacji',
    },
  },
  Logout: {
    screen: LogoutView,
    navigationOptions: {
      drawerIcon: <Image source={LAYOUT} style={ksStyle.drawerIcon} />,
      drawerLabel: () => (
        <DrawerItem
          labelStyle={{ color: 'rgba(253, 0, 0, 0.65)' }}
          label="Wyloguj"
        />
      ),
    },
  },
};