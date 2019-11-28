import {createDrawerNavigator} from "react-navigation-drawer";
import LoginScreen from "../../views/loginScreen/LoginComponent";
import EditProfileScreen from "../../views/profileScreen/EditProfileScreen";

const AuthStack = createDrawerNavigator(
    {
        LoginScreen,
        EditProfileScreen,
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

export default AuthStack;