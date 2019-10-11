import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from "../views/loginScreen/LoginScreenContainer";
import SplashScreen from "../views/splashScreen/SplashScreenContainer";
import ProfileScreen from "../views/profileScreen/ProfileScreenContainer";

const RootStack = createStackNavigator(
    {
        SplashScreen,
        LoginScreen,
        ProfileScreen,
    },
    {
        initialRouteName:   'SplashScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'right',
                fontWeight: 'bold',
            },
            headerTitle : 'Login'
        }
    }
);

export const AppNavigator = createAppContainer(RootStack);