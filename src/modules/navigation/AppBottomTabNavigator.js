import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';
import { ksStyle } from '../../styles/basic/ksBasic';
import RankingScreen from '../../screens/ranking/RankingScreen';

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Map: DashboardScreen,
    Ranking: RankingScreen,
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
