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

const ProfileViewContentHeader = () => {
  const { user } = useContext(LoginContext);

  return (
    <View style={styles.header}>
      <View>
        <Avatar source={user.avatar} rounded size={100} />
        <EditButton
          onPress={() =>
            // eslint-disable-next-line no-undef
            alert('Change avatar')
          }
          style={styles.edit_avatar_button}
        />
      </View>
      <Text
        style={styles.userName}
      >{`${user.first_name} ${user.last_name}`}</Text>
      <Text style={styles.pair}>{`Para #${user.pairID}`}</Text>
    </View>
  );
};

export default ProfileViewContentHeader;
