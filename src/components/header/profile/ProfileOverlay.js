import React from 'react';
import PropTypes from 'prop-types';
import KSOverlay from '../../ksOverlay/KSOverlay';
import KSOverlayHeader from '../../ksOverlay/KSOverlayHeader';
import CardContent from '../../card/CardContent';
import ProfileViewContentHeader from '../../../screens/profile/ProfileViewContentHeader';
import ProfileViewContentForm from '../../../screens/profile/ProfileViewContentForm';

function ProfileOverlay({ setIsVisible, isVisible }) {
  return (
    <KSOverlay setIsVisible={setIsVisible} isVisible={isVisible}>
      <KSOverlayHeader
        subtitles={[]}
        title="Profil"
        setIsVisible={setIsVisible}
      />
      <CardContent>
        <ProfileViewContentHeader />
        <ProfileViewContentForm />
      </CardContent>
    </KSOverlay>
  );
}

export default ProfileOverlay;

ProfileOverlay.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
