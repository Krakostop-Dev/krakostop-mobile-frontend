import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CustomSplashScreen from '../../screens/splash/CustomSplashScreen';
import AuthStack from './AuthStack';
import AppStack from './AppStackNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen: CustomSplashScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'SplashScreen',
    }
  )
);
