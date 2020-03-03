import { createStackNavigator } from 'react-navigation-stack';
import { ksStyle } from '../../styles/basic/ksBasic';
import AuthCard from '../../components/login/authCard';
import MsgAlert from '../../components/login/msgAlert/MsgAlert';
import ErrorOverlay from '../../components/login/loginForm/ErrorOverlay';
import LoginScreen from '../../screens/login/LoginScreen';
import EditAvatar from '../../components/login/editAvatarCard';
import ChatAgreement from '../../components/login/chatAgreementCard';
import PhoneAgreement from '../../components/login/phoneAgreementCard';

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    Auth: AuthCard,
    EditProfile1: EditAvatar,
    EditProfile2: ChatAgreement,
    EditProfile3: PhoneAgreement,
    MsgAlert,
    ErrorOverlay,
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
