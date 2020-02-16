import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../../components/card/Card';
import CardHeader from '../../components/card/CardHeader';
import CardContent from '../../components/card/CardContent';
import ProfileViewContentForm from './ProfileViewContentForm';
import ProfileViewContentHeader from './ProfileViewContentHeader';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    flex: 0.8,
    width: '90%',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  edit_avatar_button: {
    position: 'absolute',
    top: 80,
    right: -5,
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  pair: {
    fontSize: 16,
  },
});

// eslint-disable-next-line react/prop-types
export default ({ navigation }) => {
  return (
    <Card navigation={navigation}>
      <CardHeader navigation={navigation} title="Profil" />
      <CardContent style={styles.content}>
        <View style={styles.container}>
          <ProfileViewContentHeader />
          <ProfileViewContentForm />
        </View>
      </CardContent>
    </Card>
  );
};
