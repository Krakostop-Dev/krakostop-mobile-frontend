import React, { useContext } from 'react';
import { Avatar } from 'react-native-elements';
import { NavigationContext } from 'react-navigation';
import { LoginContext } from '../../modules/context/LoginContext';

function AvatarButton() {
  const { user } = useContext(LoginContext);
  const navigation = useContext(NavigationContext);

  return (
    <Avatar
      source={user.avatar}
      rounded
      size={50}
      onPress={() => navigation.navigate('Profile')}
    />
  );
}

export default AvatarButton;
