import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../../screens/splash/SplashScreen';
import AuthStack from './AuthStack';
import AppDrawerNavigator from './drawerNavigator/AppDrawerNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SplashScreen,
      App: AppDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);
