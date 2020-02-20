import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import DashboardScreen from '../../views/dashboardScreen/DashboardScreen';
import { ksStyle } from '../../styles/basic/ksBasic';

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Map: DashboardScreen,
    Ranking: DashboardScreen,
    Chat: DashboardScreen,
    Schedule: DashboardScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = MaterialCommunityIcons;
        let iconName;
        switch (routeName) {
          case 'Map':
            iconName = `map${focused ? '' : '-outline'}`;
            break;
          case 'Ranking':
            iconName = `trophy${focused ? '' : '-outline'}`;
            break;
          case 'Chat':
            iconName = `message${focused ? '' : '-outline'}`;
            break;
          case 'Schedule':
            iconName = `timetable`;
            break;
          default:
            break;
        }
        return (
          <IconComponent
            name={iconName}
            size={ksStyle.icon.size}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      inactiveBackgroundColor: ksStyle.colors.primaryColorMedium,
      activeBackgroundColor: ksStyle.colors.primaryColorDark,
    },
  }
);

export default AppBottomTabNavigator;
