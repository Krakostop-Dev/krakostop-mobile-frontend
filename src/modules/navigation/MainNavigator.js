import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../../screens/splash/SplashScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStackNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: SplashScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);
