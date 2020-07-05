import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import KSOverlay from '../../ksOverlay/KSOverlay';
import KSOverlayHeader from '../../ksOverlay/KSOverlayHeader';
import CardContent from '../../card/CardContent';
import ProfileViewContentHeader from '../../../screens/profile/ProfileViewContentHeader';
import ProfileViewContentForm from '../../../screens/profile/ProfileViewContentForm';
import LogoutView from './LogoutView';

const styles = StyleSheet.create({
  card: { paddingHorizontal: 0 },
});

function ProfileOverlay({ setIsVisible, isVisible }) {
  return (
    <KSOverlay setIsVisible={setIsVisible} isVisible={isVisible}>
      <KSOverlayHeader
        subtitles={[]}
        title="Profil"
        setIsVisible={setIsVisible}
      />

      <ScrollView>
        <CardContent style={styles.card}>
          <ProfileViewContentHeader />
          <ProfileViewContentForm />
          <LogoutView />
        </CardContent>
      </ScrollView>
    </KSOverlay>
  );
}

export default ProfileOverlay;

ProfileOverlay.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
