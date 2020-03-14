import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../../modules/context/LoginContext';
import EditAvatarButton from './EditAvatarButton';
import SmallInfoText from '../../components/SmallInfoText';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  pair: {
    fontSize: 20,
  },
});
const PAIR_LABEL = 'Para #';
export default () => {
  const { user } = useContext(LoginContext);
  const [hasErrorOccurred, setError] = useState({
    isError: false,
    message: '',
  });

  return (
    <View style={styles.header}>
      <View>
        <Avatar source={user.avatar} rounded size={120} />
        <EditAvatarButton setError={setError} />
      </View>
      {hasErrorOccurred.isError ? (
        <SmallInfoText text={hasErrorOccurred.message} color="red" />
      ) : null}
      <Text
        style={styles.userName}
      >{`${user.first_name} ${user.last_name}`}</Text>
      <Text style={styles.pair}>{`${PAIR_LABEL} ${user.pair_id}`}</Text>
    </View>
  );
};
