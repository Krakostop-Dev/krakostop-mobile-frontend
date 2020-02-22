/* eslint-disable no-undef */
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import React, { useContext } from 'react';
import EditButton from '../../components/EditButton';
import { LoginContext } from '../../modules/context/LoginContext';

const styles = StyleSheet.create({
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

export default () => {
  const { user } = useContext(LoginContext);

  return (
    <View style={styles.header}>
      <View>
        <Avatar source={user.avatar} rounded size={100} />
        <EditButton
          style={styles.edit_avatar_button}
          onPress={() => alert('Change avatar')}
        />
      </View>
      <Text
        style={styles.userName}
      >{`${user.first_name} ${user.last_name}`}</Text>
      <Text style={styles.pair}>{`Para #${user.pairID}`}</Text>
    </View>
  );
};
