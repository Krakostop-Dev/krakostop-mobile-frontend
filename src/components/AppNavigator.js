import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../views/loginScreen/LoginScreenContainer";
import ProfileScreen from "../profile/ProfileScreenContainer";
const RootStack = createStackNavigator(
    {
        LoginScreen,
        ProfileScreen,
    },
    {
        initialRouteName:   'LoginScreen',
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