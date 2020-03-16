import { createStackNavigator } from 'react-navigation-stack';
import { ksStyle } from '../../styles/basic/ksBasic';
import ProfileView from '../../screens/profile/ProfileView';
import AppBottomTabNavigator from './AppBottomTabNavigator';

const AppStack = createStackNavigator(
  {
    Profile: ProfileView,
    TabNavigator: AppBottomTabNavigator,
  },
  {
    initialRouteName: 'TabNavigator',
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: {
      backgroundColor: ksStyle.colors.backgroundColor,
      opacity: 1,
    },
  }
);

export default AppStack;
