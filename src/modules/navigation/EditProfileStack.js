import { createStackNavigator } from 'react-navigation-stack';
import { ksStyle } from '../../styles/basic/ksBasic';
import EditAvatarCard from '../../components/login/editProfile/editAvatar';
import PhoneAgreementCard from '../../components/login/editProfile/phoneAgreementCard';
import ChatConfiguration from '../../components/login/editProfile/chatConfiguration';

const EditProfileStack = createStackNavigator(
  {
    EditProfile1: EditAvatarCard,
    EditProfile2: ChatConfiguration,
    EditProfile3: PhoneAgreementCard,
  },
  {
    navigationOptions: {},
    initialRouteName: 'EditProfile2',
    headerMode: 'none',
    mode: 'modal',
    transparentCard: true,
    cardStyle: { backgroundColor: ksStyle.colors.backgroundColor, opacity: 1 },
  }
);

export default EditProfileStack;
