import React from 'react';
import { StyleSheet } from 'react-native';
import CardHeaderWithBackButton from '../../components/card/CardHeaderWithBackButton';
import ProfileViewContentForm from './ProfileViewContentForm';
import ProfileViewContentHeader from './ProfileViewContentHeader';
import CardContent from '../../components/card/CardContent';
import Card from '../../components/card/Card';

const styles = StyleSheet.create({
  card: {
    width: '90%',
  },
});

function ProfileView() {
  return (
    <Card style={styles.card}>
      <CardHeaderWithBackButton title="Profil" />
      <CardContent>
        <ProfileViewContentHeader />
        <ProfileViewContentForm />
      </CardContent>
    </Card>
  );
}
export default ProfileView;
