import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../views/loginScreen/LoginComponent';
import SplashScreen from '../views/splashScreen/SplashScreen';
import DashboardScreen from '../views/dashboardScreen/DashboardScreen';
import EditProfileScreen from '../views/profileScreen/EditProfileScreen';
import { ksColors } from '../styles/basic/ksBasic';

const AppStack = createStackNavigator(
  {
    EditProfileScreen,
    DashboardScreen,
  },
  {
    initialRouteName: 'DashboardScreen',
    defaultNavigationOptions: {
      title: 'Dashboard',
      headerStyle: {
        backgroundColor: ksColors.primaryColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'right',
        fontWeight: 'bold',
      },
    },
  }
);

const AuthStack = createDrawerNavigator(
  {
    LoginScreen,
    EditProfileScreen,
  },
  {
    initialRouteName: 'EditProfileScreen',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SplashScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);
