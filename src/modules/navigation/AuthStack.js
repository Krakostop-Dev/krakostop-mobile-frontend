import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import { ksStyle } from '../../styles/basic/ksBasic';
import AuthCard from '../../components/login/auth/authCard';
import LoginScreen from '../../screens/login/LoginScreen';
import EditProfileStack from './EditProfileStack';
import ErrorOverlay from '../../components/login/auth/loginForm/ErrorOverlay';

const AuthStack = createSwitchNavigator(
  {
    Login: createStackNavigator(
      { LoginScreen, Auth: AuthCard, ErrorOverlay },
      {
        initialRouteName: 'LoginScreen',
        headerMode: 'none',
        mode: 'modal',
        transparentCard: true,
        cardStyle: {
          backgroundColor: ksStyle.colors.backgroundColor,
          opacity: 1,
        },
      }
    ),
    EditProfile: {
      screen: EditProfileStack,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default AuthStack;
