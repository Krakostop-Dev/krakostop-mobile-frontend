import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../../views/loginScreen/LoginScreen';
import { ksStyle } from '../../styles/basic/ksBasic';
import AuthCard from '../../components/login/authCard';
import EditProfileCard from '../../components/login/editProfileCard';
import MsgAlert from '../../components/login/msgAlert/MsgAlert';

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    Auth: AuthCard,
    EditProfile: EditProfileCard,
    MsgAlert,
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
