import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from "../../views/splashScreen/SplashScreen";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: SplashScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'App',
        }
    )
);

