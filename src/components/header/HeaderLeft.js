import React, { useContext, useState } from 'react';
import { Avatar } from 'react-native-elements';
import { LoginContext } from '../../modules/context/LoginContext';
import ProfileOverlay from './profile/ProfileOverlay';

function HeaderLeft() {
  const { user } = useContext(LoginContext);

  const [isProfileOverlayVisible, setIsProfileOverlayVisible] = useState(false);

  return (
    <>
      <Avatar
        source={user.avatar}
        rounded
        size={50}
        onPress={() => setIsProfileOverlayVisible(true)}
      />
      <ProfileOverlay
        isVisible={isProfileOverlayVisible}
        setIsVisible={setIsProfileOverlayVisible}
      />
    </>
  );
}

export default HeaderLeft;
