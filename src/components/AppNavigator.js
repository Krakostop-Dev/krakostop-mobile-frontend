import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from "../views/loginScreen/LoginScreenContainer";
import SplashScreen from "../views/splashScreen/SplashScreenContainer";
import ProfileScreen from "../views/profileScreen/ProfileScreenContainer";

const AppStack = createStackNavigator(
    {
        ProfileScreen
    },
    {
        initialRouteName: 'ProfileScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign: 'right',
                fontWeight: 'bold',
            },
            headerTitle: 'Login'
        }
    }
);

const AuthStack = createStackNavigator(
    {
        LoginScreen
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
            initialRouteName: "Auth",
        }
    )
);