import { Image } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { ksStyle } from '../../../styles/basic/ksBasic';

import AppStackNavigator from '../AppStackNavigator';

const BACKPACK = require('../../../../assets/icons/backpack.png');
const PARTNERS = require('../../../../assets/icons/partners.png');
const BAG = require('../../../../assets/icons/bag.png');
const CONTACT = require('../../../../assets/icons/contact.png');
const INFO = require('../../../../assets/icons/info.png');
const LOGOUT = require('../../../../assets/icons/logout.png');

export default {
  TabNavigator: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
  Profile: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    },
  },
  WhatToTake: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: <Image source={BACKPACK} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Co zabrać?',
    },
  },
  Partners: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: <Image source={PARTNERS} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Partnerzy',
    },
  },
  Package: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: <Image source={BAG} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Pakiet startowy',
    },
  },
  Contact: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: <Image source={CONTACT} style={ksStyle.drawerIcon} />,
      drawerLabel: 'Kontakt',
    },
  },
  AboutApp: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: <Image source={INFO} style={ksStyle.drawerIcon} />,
      drawerLabel: 'O aplikacji',
    },
  },
  Logout: {
    screen: AppStackNavigator,
    navigationOptions: {
      drawerIcon: <Image source={LOGOUT} style={ksStyle.drawerIcon} />,
      drawerLabel: () => (
        <DrawerItem
          labelStyle={{ color: 'rgba(253, 0, 0, 0.65)' }}
          label="Wyloguj"
        />
      ),
    },
  },
};
