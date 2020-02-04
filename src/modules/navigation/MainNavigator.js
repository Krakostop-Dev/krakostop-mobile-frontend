import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from "../../views/splashScreen/SplashScreen";
import AuthStack from "./AuthStack";
import AppDrawerNavigator from "./AppDrawerNavigator";

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

