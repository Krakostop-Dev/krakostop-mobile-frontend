import DashboardScreen from "../../views/dashboardScreen/DashboardScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

const AppBottomNavigator = createBottomTabNavigator(
    {
        Map: DashboardScreen,
        Ranking: DashboardScreen,
        Chat: DashboardScreen,
        Schedule: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = MaterialCommunityIcons;
                let iconName;
                switch (routeName) {
                    case "Map":
                        iconName = `map${focused ? '' : '-outline'}`;
                        break;
                    case "Ranking":
                        iconName = `trophy${focused ? '' : '-outline'}`;
                        break;
                    case "Chat":
                        iconName = `message${focused ? '' : '-outline'}`;
                        break;
                    case "Schedule":
                        iconName = `timetable`;
                        break;
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default AppBottomNavigator;