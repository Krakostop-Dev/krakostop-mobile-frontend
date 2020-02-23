import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../../views/loginScreen/LoginScreen';
import { ksStyle } from '../../styles/basic/ksBasic';
import AuthCard from '../../components/login/authCard';
import EditProfileCard from '../../components/login/editProfileCard';

const AuthStack = createStackNavigator(
  {
    LoginScreen,
    Auth: AuthCard,
    EditProfile: EditProfileCard,
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
