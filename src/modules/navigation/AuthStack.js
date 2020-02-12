import { createStackNavigator } from 'react-navigation-stack';
import { ksStyle } from '../../styles/basic/ksBasic';
import AuthCard from '../../components/login/authCard';
import EditProfileCard from '../../components/login/editProfileCard';
import MsgAlert from '../../components/login/msgAlert/MsgAlert';
import ErrorOverlay from '../../components/login/loginForm/ErrorOverlay';
import LoginScreen from '../../screens/login/LoginScreen';

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    Auth: AuthCard,
    EditProfile: EditProfileCard,
    MsgAlert,
    ErrorOverlay,
  },
  {
    initialRouteName: 'EditProfile',
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: { backgroundColor: ksStyle.colors.backgroundColor, opacity: 1 },
  }
);

export default AuthStack;
