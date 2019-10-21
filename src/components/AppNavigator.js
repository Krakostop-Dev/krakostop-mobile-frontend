import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/loginScreen/LoginComponent';
import SplashScreen from '../views/splashScreen/SplashScreen';
import DashboardScreen from '../views/dashboardScreen/DashboardScreen';
import EditProfileScreen from '../views/profileScreen/EditProfileScreen';

const AppStack = createDrawerNavigator(
  {
    EditProfileScreen,
    DashboardScreen,
  },
  {
    initialRouteName: 'DashboardScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'right',
        fontWeight: 'bold',
      },
    },
  }
);

const AuthStack = createDrawerNavigator({
  LoginScreen,
  EditProfileScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SplashScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
