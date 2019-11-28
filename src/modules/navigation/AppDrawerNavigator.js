import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import DashboardScreen from "../../views/dashboardScreen/DashboardScreen";
import {MaterialIcons} from "@expo/vector-icons";
import AppBottomNavigator from "./AppBottomNavigator";
import {ksStyle} from "../../styles/basic/ksBasic";
let IconComponent = MaterialIcons;

export default createDrawerNavigator({
    Bottom: AppBottomNavigator,
    Partners: {
        screen: DashboardScreen,
        navigationOptions: {
            drawerLabel: 'Partnerzy',
            drawerIcon: ({ tintColor }) =>(<IconComponent name={"people"} size={ksStyle.icon.size} color={tintColor} />)
        }
    },
    Contact: {
        screen: DashboardScreen,
        navigationOptions: {
            drawerLabel: 'Kontakt',
            drawerIcon: ({tintColor}) => <IconComponent name={"phone"} size={ksStyle.icon.size} color={tintColor}/>,
        }
    }
    },
    {
        initialRouteName: "Bottom"
    }
    );