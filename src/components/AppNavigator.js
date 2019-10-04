import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../views/loginScreen/LoginScreenContainer";
import ProfileScreen from "../profile/ProfileComponent";
const RootStack = createStackNavigator(
    {
        LoginScreen,
        ProfileScreen,
    },
    {
        initialRouteName:   'LoginScreen'
    }
);

export const AppNavigator = createAppContainer(RootStack);