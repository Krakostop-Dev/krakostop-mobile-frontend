import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../../views/loginScreen/LoginScreen';
import { ksStyle } from '../../styles/basic/ksBasic';
import EmailAuthenticationOverlay from '../../views/loginScreen/EmailAuthenticationOverlay';

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    EmailAuth: EmailAuthenticationOverlay,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: { backgroundColor: ksStyle.colors.backgroundColor, opacity: 1 },
  }
);

export default AuthStack;
