import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../../screens/login/LoginComponent';
import EditProfileScreen from '../../screens/profile/EditProfileScreen';

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
