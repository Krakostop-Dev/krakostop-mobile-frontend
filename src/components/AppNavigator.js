import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/loginScreen/LoginScreenContainer';
import SplashScreen from '../views/splashScreen/SplashScreenContainer';
import ProfileScreen from '../views/profileScreen/ProfileScreenContainer';
import DashboardScreen from '../views/dashboardScreen/DashboardScreenContainer';

const AppStack = createDrawerNavigator(
  {
    ProfileScreen,
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
    ProfileScreen
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
